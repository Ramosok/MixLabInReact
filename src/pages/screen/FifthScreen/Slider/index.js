import { Swiper, SwiperSlide } from 'swiper/react';

import CardSlider from "./CardSlider";

import {cardSliderList} from "./data";

import styles from './slider.module.css'
import stylesSwiper from 'swiper/css';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={1.33}
            centeredSlides={true}
            loop={true}
            effect={'cards'}
        >
            {cardSliderList.map(({img, text, logoSocial, Link,id}) =>
                <SwiperSlide key={id} className={[`${stylesSwiper.swiper_class} ${styles.card_carousel}`]}>
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

export default Slider;