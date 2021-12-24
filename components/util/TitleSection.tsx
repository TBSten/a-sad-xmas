import {FC} from "react" ; 

import styles from "./TitleSection.module.scss" ;

export interface TitleSectionProps{
    title:string;
    sub?:string;
}

const TitleSection :FC<TitleSectionProps> = ({children,title,sub})=>{
  return (
      <section className={styles.ts}>
          <div>
            <h1>{title}</h1>
            <h2>{sub}</h2>
          </div>
      </section>
  )
} 

export default TitleSection ;
