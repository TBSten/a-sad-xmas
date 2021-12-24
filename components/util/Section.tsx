
import {FC} from "react" ; 
import styles from "./Section.module.scss" ;

export interface SectionProps{
  title?:string;
  full?:boolean;
  className?:string;
}

const Section :FC<SectionProps> = ({
  children,
  title="",
  full=false,
  className=""
})=>{
  return (
    <section className={[styles.sec,full?styles.full:""].join(" ")}>
      <div className={[styles.con,full?styles.full:"",className].join(" ")}>
        <h3>{title}</h3>
        {children}
      </div>
    </section>
  )
} 

export default Section ;
