import Link from "next/link";
import { FC } from "react";

import styles from "./Header.module.scss" ;

export interface HeaderProps {}

const pages = [
    {
        text:"心の支え",
        url:"/support",
    },
    {
        text:"嘆き",
        url:"/comments",
    },
] ;

const Header: FC<HeaderProps> = ({}) => {
    return (
        <div className={styles.con}>
            <header className={styles.header}>
                <span>
                    <Link href="/">
                        <a>
                            A SAD XMAS
                        </a>
                    </Link>
                </span>
                <nav>
                    {pages.map(p=>(
                        <Link key={p.url} href={p.url}>
                            <a>{p.text}</a>
                        </Link>
                    ))}
                </nav>
            </header>
        </div>
    );
};
export default Header;
