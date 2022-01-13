import {Swiper, SwiperSlide} from 'swiper/react';

import styles from 'swiper/css';

import CardSlider from "../screen/FifthScreen/Slider/CardSlider";
import {cardSliderList} from "../screen/FifthScreen/Slider/data";

const SwiperS = () => {
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={1.33}
            centeredSlides={true}
            effect={'cards'}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {cardSliderList.map(({img, text, logoSocial, Link}) =>
                <SwiperSlide key={Math.random()} className={[`${styles.card_carousel} ${styles.swiper_class}`]}>
                    <CardSlider
                        img={img}
                        text={text}
                        logoSocial={logoSocial}
                        Link={Link}
                    />
                </SwiperSlide>)}

        </Swiper>
    );
};

export default SwiperS;