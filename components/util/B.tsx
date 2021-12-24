import {FC} from "react" ; 


export interface BProps{
}

const B :FC<BProps> = ({children})=>{
  return (
    <b className="text-bold text-blue-500">
      {children}
    </b>
  )
} 
export default B ;
