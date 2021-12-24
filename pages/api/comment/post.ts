import { postComment } from "lib/deta";
import {NextApiHandler} from "next" ;

const handler :NextApiHandler = async (req,res)=>{
    const body = JSON.parse(req.body) ;
    console.log(body["name"]);
    console.log(body["text"]);
    const result = await postComment(
        body.name,
        body.text,
    ) ;
    res.json(result );
} ;

export default handler ;

export const config = {
    api:{
        bodyParser:{
            sizeLimit:"100mb",
        },
    },
} ;
