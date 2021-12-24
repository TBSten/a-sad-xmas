import Head from "next/head";

export default function CommonMeta({
    title = "非リアのためのWebサイト",
    description = "全国の非リアよ、ここに集え！リア充を爆破するんだ！！！",
}) {
    console.log("site url",process.env.SITE_URL);
    return (
        <Head>
            <title>{title}</title>
            <meta property="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta
                property="og:image"
                content={`${process.env.SITE_URL}/ogp_large.png`}
            />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
}
