import { pushButton } from "lib/deta";
import {NextApiHandler} from "next" ;

const handler :NextApiHandler = async (req,res)=>{
    const { key } = req.query ;
    if(typeof key === "string"){
        await pushButton(key,1);
        res.json( {
            msg:"ok",
        } );
    }else{
        res.status(200).json({
            msg:"error",
            error:"query is unvalid !",
        }) ;
    }
} ;

export default handler ;
