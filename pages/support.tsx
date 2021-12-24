import Layout from "components/layout/Layout";
import B from "components/util/B";
import Code from "components/util/Code";
import CommonMeta from "components/util/CommonMeta";
import Section from "components/util/Section";
import TitleSection from "components/util/TitleSection";
import Head from "next/head";
import { FC, ReactNode } from "react";
import styles from "./support.module.scss";


const supports :{
    title:string,
    singer:string,
    content:ReactNode,
}[] = [
    {
        title:"クリスマスソング",
        singer:"back number",
        content:
            <>
                <Code>{`
                    会いたいと思う回数が
                    
                    会えないと痛いこの胸が

                    君のことどう思うか教えようとしてる
                `}
                </Code>

                <p>
                    非リアの権化みたいな曲ですよね。
                    毎年クリスマスが近づくとどこからともなく流れてきます。
                    非リアなら1度くらい
                    <B>片思い相手を思い浮かべながらヒトカラで熱唱</B>
                    する人も珍しくないはず。
                </p>

                <Code>{`
                    長くなるだけだからまとめるよ

                    君が好きだ
                `}</Code>

                <p>
                    こんなこと言ってみたいぃぃ・言われてみたいぃぃと
                    嘆いているあなた。現実を見ましょう。「
                    <B>サンタとやらに頼んでも仕方ない</B>ので...
                </p>
            </>
    },
] ;

export interface EmotionalProps {}

const Emotional: FC<EmotionalProps> = ({}) => {
    return (
        <Layout>
            
            <Head>
                <title>心の支え | 非リアのためのWebサイト</title>
                <CommonMeta/>
            </Head>

            <TitleSection
                title="心の支え"
                sub="非リアに響くもの">
                
            </TitleSection>

            <Section title="心の支え" full>
                非リアのための歌詞や名言を集めました。
                歌詞や名言を自分と重ね合わせて
                苦い片思いを嚙み締めましょう。
            </Section>

            {supports.map(song=>(
                <Section title={song.title} className={styles.item}>
                    <h4>{song.singer}</h4>
                    {song.content}
                </Section>
            ))}
            


        </Layout>
    );
};
export default Emotional;



