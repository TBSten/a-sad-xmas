import B from "components/util/B";
import Section from "components/util/Section";
import TitleSection from "components/util/TitleSection";
import { FC, useState, VFC } from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import Button from "components/util/Button";

import img_xmas from "images/xmas-1.png";
import styles from "./index.module.scss";
import { GetServerSideProps } from "next";
import { getButtons } from "lib/deta";
import Head from "next/head";
import CommonMeta from "components/util/CommonMeta";


const buttonDatas = [
    {
        key:"bomb",
        text:(
            <>
                <div>🤤🤤🤤</div>
                リア充爆発ﾎﾞﾀﾝ
                <div>🤤🤤🤤</div>
            </>
        ),
        pushedUrl:"",
    },
    {
        key:"enviable",
        text:(
            <>
                <div>🤤🤤🤤</div>
                リア充うらやましいﾎﾞﾀﾝ
                <div>🤤🤤🤤</div>
            </>
        ),
        pushedUrl:"",
    },
    {
        key:"want",
        text:(
            <>
                <div>🤤🤤🤤</div>
                彼氏彼女ほしいﾎﾞﾀﾝ
                <div>🤤🤤🤤</div>
            </>
        ),
        pushedUrl:"",
    },
] ;


interface IndexProps {
    buttons:any[];
}

function makeHandlePush(key:string,setDatas){
    return async ()=>{
        console.log("push !");
        await fetch(`/api/button/push/${key}`).then(res=>res.json())
            .then((json)=>{
                console.log("success . have a good xmas ...",json);
                setDatas(prev=>{
                    let ans = [...prev] ;
                    ans = ans.map(data=>{
                        if(data.key === key){
                            return {
                                ...data,
                                count:data.count+1,
                            } ;
                        }else{
                            return data ;
                        }
                    })
                    return ans ;
                });
            })
            .catch((e)=>{
                alert("エラーが発生しました");
                console.error(e);
            }) ;
    } ;
}
const Index: FC<IndexProps> = ({buttons}) => {
    const [datas,setDatas] = useState(buttonDatas.map((buttonData)=>{
        const button = buttons[buttonData.key] ;
        return {
            ...button,//count,key
            ...buttonData,//key,pushedUrl,text
        } as typeof buttonData & {
            count:number,
            key:string,
        };
    }));

    return (
        <Layout>

            <Head>
                <title>非リアのためのWebサイト</title>
                <CommonMeta/>
            </Head>

            
            <TitleSection title="A SAD XMAS" sub="悲しいクリスマス" />

            <Section full>
                <div id="buttons" className={styles.buttons}>
                    {datas.map((data,idx)=>(
                        <div className={styles.btn} key={idx}>
                            <Button onClick={makeHandlePush(data.key,setDatas)}>
                                {data.text}
                                <div>
                                    NOW:{data.count}
                                </div>
                            </Button>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="このサイトは？">
                <B>友達もいない。恋人もいない。</B>
                そんな悲しい人たちのためのサイトです。
                <a href="#buttons" className={styles.link}>
                    ↑↑↑のボタン
                </a>
                をたくさんクリックして 心の中のモヤモヤを発散しましょう！！！
            </Section>
        </Layout>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const buttons = await getButtons() ;
    return {
        props: {
            buttons,
        },
    };
};

