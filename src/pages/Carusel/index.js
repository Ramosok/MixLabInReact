import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {cardSliderList} from "../screen/FifthScreen/Slider/data";
import CardSlider from "../screen/FifthScreen/Slider/CardSlider";
import './carusel.css'
const Carusel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1300},
            items: 1,
            partialVisibilityGutter: 100
        },
        tablet: {
            breakpoint: {max: 1440, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <Carousel
            className='carusel'
            autoPlaySpeed={1000}
            responsive={responsive}
            infinite={true}
            transitionDuration={500}
            partialVisible={true}
            itemClass="carousel-item-padding-40-px"

        >
            {cardSliderList.map(({img, text, logoSocial, Link}) =>
                <div key={Math.random()} className='card_carousel newclass'>
                    <CardSlider
                        img={img}
                        text={text}
                        logoSocial={logoSocial}
                        Link={Link}
                    />
                </div>)}
        </Carousel>
    );
};

export default Carusel;