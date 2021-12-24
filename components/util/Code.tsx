import { FC } from "react";
import styles from "./Code.module.scss";

export interface CodeProps {
    children:string;
}

const Code: FC<CodeProps> = ({ children }) => {
    children = children
        .replace(/^(\s+)/,"")
        .replace(/\n(\s+)/g,"\n") ;
    return (
        <pre className={styles.code}>
            <code>
                {children}
            </code>
        </pre>
    );
};
export default Code;
