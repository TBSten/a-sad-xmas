import { FC, HTMLAttributes } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
    line?:boolean;
    size?:("sm"|"md"|"lg");
}

const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = (props) => {
    const {
        children,
        line=false,
        size="md",
    } = props ;
    const child = (
        <button className={[styles.button,styles[size]].join(" ")} {...props}>{children}</button>
    ) ;
    if(line)return <div className={styles.line}>{child}</div> ;
    return child ;
};
export default Button;
