import React from 'react'
import Head from 'next/head';

const Brand = () => {
    return(
        <>
            <Head>
                <title>Brand - 당신의 향수를 추천해드립니다.</title>
                <meta name="description" content="향기의 모든것, 당신의 향기를 추천해드립니다."/>
                <meta name="keywords" content="향수, 향수추천, 데메테르, 공식 몰, 오 드 시슬리, 기억, 따뜻한 향기, "/>
                <meta name="og:type" content="website"/>
                <meta name="og:description" content="향기의 모든것, 당신의 향기를 추천해드립니다."/>
            </Head>
            <div className="brand_main"></div>
            <div className="brand_content">
                <img src="/img/moment.png" alt=""/>
                <img src="/img/propose.png" alt=""/>
                <img src="/img/brand_title_img.png" alt=""/>
                <div class="gray_zone"></div>
                <img src="/img/youtube_title.png" alt=""/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uKrTRfEqAC4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img src="/img/memory.png" alt=""/>
                <img src="/img/right_arrow.png" alt=""/>
                <img src="/img/slide1.png" alt=""/>
                <img src="/img/bottom_perfume.png" alt=""/>
                <img src="/img/importatnt_text.png" alt=""/>
            </div>
        </>
    );
};

export default Brand;