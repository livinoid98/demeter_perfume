import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';

const cs = () => {
    let boards = useSelector(state => state.board.boardContents);
    return(
        <>
            <Head>
                <title>CS - 당신의 향수를 추천해드립니다.</title>
                <meta name="description" content="향기의 모든것, 당신의 향기를 추천해드립니다."/>
                <meta name="keywords" content="향수, 향수추천, cs, faq, 배송, 묶음배송, 상품주문, 무료배송, 교환신청, 환불절차, 해외배송"/>
                <meta name="og:type" content="website"/>
                <meta name="og:description" content="향기의 모든것, 당신의 향기를 추천해드립니다."/>
            </Head>
            <div className="cs_main"></div>
            <div className="faq">
                <div className="faq_title">
                    <h3>DEMETER FAQ</h3>
                </div>
                <div className="faq_content clearfix">
                    <table>
                        <thead>
                            <tr>
                                <td>번호</td>
                                <td>제목</td>
                                <td>작성자</td>
                                <td>작성일</td>
                                <td>조회</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                boards.map((item,idx) => (
                                    <tr key={idx}>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td>{item[4]}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="find clearfix">
                        <select>
                            <option>제목</option>
                            <option>내용</option>
                        </select>
                        <input type="text"/>
                        <button>검색</button>
                    </div>
                    <Link href="/board/create"><a><button className="submit">글쓰기</button></a></Link>
                </div>
            </div>
        </>
    );
};

export default cs;