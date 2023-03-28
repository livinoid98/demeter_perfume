import React, {useRef} from 'react';
import Head from 'next/head';

const Signature = () => {
    const citrus = useRef();
    const onCitrus = () => {
        citrus.current.style.display = "block";
    };

    const floral = useRef();
    const onFloral = () => {
        floral.current.style.display = "block";
    };

    const fruity = useRef();
    const onFruity = () => {
        fruity.current.style.display = "block";
    }

    const green = useRef();
    const onGreen = () => {
        green.current.style.display = "block";
    }

    const woody = useRef();
    const onWoody = () => {
        woody.current.style.display = "block";
    }

    const musk = useRef();
    const onMusk = () => {
        musk.current.style.display = "block";
    }

    const close = () => {
        citrus.current.style.display = "none";
        floral.current.style.display = "none";
        fruity.current.style.display = "none";
        green.current.style.display = "none";
        woody.current.style.display = "none";
        musk.current.style.display = "none";
    }

    return(
        <>
            <Head>
                <title>Signature - 당신의 향수를 추천해드립니다.</title>
                <meta name="description" content="향기의 모든것, 당신의 향기를 추천해드립니다."/>
                <meta name="keywords" content="향수, 향수추천, citrus, floral, fruity, green, woody, musk, 레몬향, 꽃향기, 과일향, 꽃 향, 로즈우드향, 사향여우딜향 "/>
                <meta name="og:type" content="website"/>
                <meta name="og:description" content="향기의 모든것, 당신의 향기를 추천해드립니다."/>
            </Head>
            <div className="choice">
                <div className="choice_wrap">
                    <img src="/img/choice_first.png" alt=""/>
                    <img src="/img/citrus_img.png" alt="" onClick={onCitrus} />
                    <img src="/img/floral_img.png" alt="" onClick={onFloral} />
                    <img src="/img/fruity_img.png" alt="" onClick={onFruity} />
                    <span onClick={onCitrus}>Citrus / 레몬향</span>
                    <span onClick={onFloral}>Floral / 꽃향기</span>
                    <span onClick={onFruity}>Fruity / 과일향</span>
                    <img src="/img/green_img.png" alt="" onClick={onGreen}/>
                    <img src="/img/woody_img.png" alt="" onClick={onWoody}/>
                    <img src="/img/musk_img.png" alt="" onClick={onMusk}/>
                    <span onClick={onGreen}>Green / 풀 향</span>
                    <span onClick={onWoody}>Woody / 로즈우드향</span>
                    <span onClick={onMusk}>Musk / 사향여우털향</span>
                </div>
                <div className="citrus_info info clearfix" ref={citrus}>
                    <div className="info_img">
                        <img src="/img/citrus_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={close}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Citrus</h3>
                        <p>오렌지, 레몬, 라임, 자몽 등의 향과 풍미를 느낄 수 있다. 풋풋하고 싱싱하며, 청량감 있는 Dry White Wine에서 맡을 수 있는 가장 기본적인 아로마</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
                <div className="floral_info info clearfix" ref={floral}>
                    <div className="info_img">
                        <img src="/img/floral_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={close}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Floral</h3>
                        <p>자연에서 살아 숨쉬는 꽃 시계 (Floral Clock)에서 영감을 받아 탄생한 제품으로, 밤이 되면 꽃잎을 오므려 스스로를 보호하고, 아침이 되면 눈부시고 밝게 빛나는 본연의 모습을 드러내는 마법과도 같은 자연의 원리를 포착하여 아침의 아름다움과 밤을 품은 달콤한 꽃의 정수를 관능적인 느낌을 담아낸 향</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
                <div className="fruity_info info clearfix" ref={fruity}>
                    <div className="info_img">
                        <img src="/img/fruity_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={close}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Fruity</h3>
                        <p>사과, 살구, 복숭아 등 citrus note를 제외한 과일 향조, 달콤하고 신선하며 대중에게 가장 친밀하고 가벼운 향기 주로 citrus, floral, green 노트와 함께 사용하기도 한다.</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
                <div className="green_info info clearfix" ref={green}>
                    <div className="info_img">
                        <img src="/img/green_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={close}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Green</h3>
                        <p>고요한 숲 속의 한 가운데에서 명상하는 듯한 기분을 주는 맑고 청량한 향, 심적 스트레스까지 씻어내는 은은하고 상쾌한 풀 내음이 주는 안정감</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
                <div className="woody_info info clearfix" ref={woody}>
                    <div className="info_img">
                        <img src="/img/woody_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={close}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Woody</h3>
                        <p>'나무의, 우거진 숲의'라는 뜻을 지닌 우디의 말 그대로 녹음이 짙은 여름 숲의 상쾌함이 느껴지며, 낙엽이 물든 가을 숲의 중후함이 전해지기도 한다.</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
                <div className="musk_info info clearfix" ref={musk}>
                    <div className="info_img">
                        <img src="/img/musk_info_img.jpg" alt=""/>
                    </div>
                    <div className="info_close" onClick={close}>
                        <img src="/img/close.png" alt=""/>
                    </div>
                    <div className="info_text">
                        <h3>Musk</h3>
                        <p>사향노루 수컷의 생식선 부근 분비선에서 생성되는 유향물질, 일종의 사랑의 미약으로 은은한 살겹냄새가 나서 따뜻하고 포근한 느낌을 받을 수 있다.</p>
                        <span>아래의 Collection에서 해당 제품을 확인해보세요.</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signature;