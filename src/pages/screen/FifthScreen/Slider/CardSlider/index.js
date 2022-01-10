import styles from '../slider.module.css'

const CardSlider = ({img, text, logoSocial, Link}) => {
    return (
        <>
            <img className={styles.img_container} src={img} alt=""/>
            <div className={styles.card_text_container}>
                <p className={styles.card_text_container_slider}>{text}</p>
                <div className={styles.logo_link_slider}><img src={logoSocial} alt=""/><a href="#">{Link}</a></div>
            </div>
        </>
    );
};

export default CardSlider;