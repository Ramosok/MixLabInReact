import styles from './../footer.module.css'

const SocialImgsAndLinks = ({linkTo, img}) => {
    return (

        <a className={styles.social_link} href={linkTo}><img src={img} alt=""/></a>

    );
};

export default SocialImgsAndLinks;