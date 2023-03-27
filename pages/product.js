import React from 'react';

const Product = () => {
    return(
        <>
            <div className="product_main">
                <div className="main_title">
                    <h3>AUGUST PHOTO DIARY</h3>
                </div>
                <div className="product_main_img">
                    <img src="/img/unique_perfume.png" alt=""/>
                </div>
                <div className="separate_line"></div>
                <div className="main_circle">
                    <img src="/img/main_circle_img.png" alt=""/>
                    <img src="/img/main_circle_text.png" alt=""/>
                </div>
            </div>
            <div className="layering">
                <div className="layering_title">
                    <img src="/img/product_layering_title.png" alt=""/>
                </div>
                <ul className="clearfix">
                    <li>
                        <img src="/img/layering_img1.png" alt=""/>
                        <span>Funeral Home</span>
                        <p>30ml 픽미업 코롱향수</p>
                    </li>
                    <li>
                        <img src="/img/layering_img2.png" alt=""/>
                        <span>매력있솝, 사랑스럽솝</span>
                        <p>비누향기 SOAPY 향수 3종</p>
                    </li>
                    <li>
                        <img src="/img/layering_img3.png" alt=""/>
                        <span>씨티 에디션_파리</span>
                        <p>EDT Jumping Life</p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Product;