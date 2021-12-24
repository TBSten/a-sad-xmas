import { getComments, goodComment, postComment } from "lib/deta";
import {NextApiHandler} from "next" ;

const handler :NextApiHandler = async (req,res)=>{
    const body = JSON.parse(req.body) ;
    await goodComment(
        body.key,
    ) ;
    res.json(getComments());
} ;

export default handler ;

export const config = {
    api:{
        bodyParser:{
            sizeLimit:"100mb",
        },
    },
} ;
