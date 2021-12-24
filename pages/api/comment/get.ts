import { getComments, postComment } from "lib/deta";
import {NextApiHandler} from "next" ;

const handler :NextApiHandler = async (req,res)=>{
    const ans = await getComments() ;
    res.json(ans );
} ;

export default handler ;

export const config = {
    api:{
        bodyParser:{
            sizeLimit:"100mb",
        },
    },
} ;
