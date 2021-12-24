import Layout from "components/layout/Layout";
import Section from "components/util/Section";
import TitleSection from "components/util/TitleSection";
import { Comments, getComments, goodComment } from "lib/deta";
import { GetServerSideProps } from "next";
import React, { FC, useState } from "react";

import styles from "./comments.module.scss";

export interface ComentsProps {
    comments: Comments[];
}

const Coments: FC<ComentsProps> = ({ comments }) => {
    const [_comments , setComments] = useState(comments) ;
    const [name,setName] = useState("孤独な非リア") ;
    const [text,setText] = useState("クリスマスって、いいよな...") ;
    const [state,setState] = useState<"waiting"|"fetching"|"success"|"error">("waiting");
    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        setState("fetching");
        console.log("嘆く",name,text)
        const body = {
            name,
            text,
        } ;
        fetch("/api/comment/post",{
            method:"POST",
            body:JSON.stringify(body),
        }).then(res=>res.json())
            .then(json=>{
                setTimeout(()=>{
                    console.log("have a good xmas ...")
                    console.log(json);
                    setComments(prev=>[
                        ...prev,
                        {
                            key:json.key,
                            name:body.name,
                            text:body.text,
                            good:json.good,
                        }
                    ]);
                    setState("success");
                },3*1000)
            })
            .catch(e=>{
                console.error(e);
                alert("エラーが発生しました");
                setState("error");
            });
    }
    function handleGoodComment(key:string){
        setState("fetching");
        fetch("/api/comment/good",{
            method:"post",
            body:JSON.stringify({
                key,
            })
        }).then(res=>res.json())
            .then(json=>{
                setState("success")
                // location.reload();
            })
            .catch(e=>{
                console.error(e);
                alert("エラーが発生しました");
                setState("error")
            });
    }
    return (
        <Layout>
            <TitleSection title="非リアの嘆き" />
            <Section
                title="あぁ、神よ。非リアの悶え苦しむ声が聞こえるぞよ..."
                full
            >
                全国の非リアはここにコメントを残して、
                クリスマスの苦しさを紛らわしてください。
                安心してください、仲間はたくさんいます。
            </Section>

            <Section title="嘆く">
                <form action="" onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        非リアの名前
                    </div>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <div>
                        嘆き    
                    </div>
                    <textarea value={text} onChange={(e)=>setText(e.target.value)}></textarea>
                    <input type="submit" value="嘆く" disabled={state === "fetching" }/>
                </form>
            </Section>

            {_comments.map((comment) => (
                <Section key={comment.key} title={comment.name} className={styles.comment}>
                    {comment.text}
                    {(()=>{console.log("comment::",comment)})()}
                    <button onClick={()=>handleGoodComment(comment.key)} disabled={state === "fetching"}>
                        GOOD({comment.good})
                    </button>
                </Section>
            ))}

            {_comments.length <= 0 ? (
                <Section>なに？非リアが一人もいないだと？！</Section>
            ) : (
                ""
            )}
        </Layout>
    );
};
export default Coments;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const comments = await getComments();
    return {
        props: {
            comments,
        },
    };
};
