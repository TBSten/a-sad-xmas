
import {config} from "dotenv" ;
import { Deta } from "deta" ;

config();

console.log("PROJECT KEY :",process.env.DEV_PROJECT_KEY);

const deta = Deta(process.env.DEV_PROJECT_KEY) ;

const buttons = deta.Base("buttons") ;
const comments = deta.Base("comments") ;

//buttons
export async function initButtons(key:string,count:number=0){
    const result = await buttons.put({
        key,
        count,
    });
    return result ;
}
export async function pushButton(key:string,count:number=1){
    await buttons.update({
        count:buttons.util.increment(count),
    },key);
}
export async function getButtons(){
    const result = await buttons.fetch() ;
    return result.items.reduce((p,v)=>{
        p[v.key as string] = v ;
        return p ;
    },{} );
}

//comments
export interface Comments{
    key:string;
    name:string;
    text:string;
    good:number;
}
export async function postComment(
    name:string,
    text:string,
){
    console.log("POST COMMENT !!!",name,text)
    const result = await comments.put({
        name,
        text,
        good:0,
        createdAt:new Date().getTime(),
    });
    return result ;
}
export async function goodComment(key:string){
    const result = await comments.update({
        good:comments.util.increment(1),
    },key);
    return result ;
}
console.log("get comments define ")
export async function getComments() :Promise<Comments[]>{
    const result = await comments.fetch() ;
    return result.items.map(item=>{return {
        name:"",
        text:"",
        good:0,
        ...item,
    }}) as Comments[] ;
}


