import React from 'react';
import Router from 'next/router';
import Head from 'next/head';

const Collaborate = () => {
    const changePage = () => {
        Router.push('/product');
    };
    return(
        <>
            <Head>
                <title>Collaborate - 당신의 향수를 추천해드립니다.</title>
                <meta name="description" content="향기의 모든것, 당신의 향기를 추천해드립니다."/>
                <meta name="keywords" content="향수, 향수추천, 콜라보레이션, 현대백화점, 다이노탱, 일러스트레이터, 즐거움을 주는 그림"/>
                <meta name="og:type" content="website"/>
                <meta name="og:description" content="향기의 모든것, 당신의 향기를 추천해드립니다."/>
            </Head>
            <div className="collaborate_main">
                <img src="/img/collaborate_main_title.png" alt=""/>
                <img src="/img/renew.png" alt=""/>
            </div>
            <div className="benefit">
                <img src="/img/department_text.png" alt=""/>
                <img src="/img/benefit_text.png" alt=""/>
                <img src="/img/hyundai_banner.png" alt=""/>
                <img src="/img/illust_perfume_main.png" alt=""/>
            </div>
            <div className="illust_collabo">
                <img src="/img/illust_perfume_text.png" alt=""/>
                <img src="/img/illust_more.png" alt="" onClick={changePage}/>
                <img src="/img/illust_perfume1.png" alt=""/>
                <img src="/img/illust_perfume2.png" alt=""/>
                <img src="/img/illust_perfume3.png" alt=""/>
            </div>
        </>
    );
};

export default Collaborate;