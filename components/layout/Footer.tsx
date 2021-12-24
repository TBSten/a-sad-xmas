import {FC} from "react" ; 

import styles from "./Footer.module.scss" ;

export interface FooterProps{
}

const Footer :FC<FooterProps> = ({})=>{
  return (
    <footer className={styles.footer}>
        A SAD XMAS
    </footer>
  )
} 
export default Footer ;

