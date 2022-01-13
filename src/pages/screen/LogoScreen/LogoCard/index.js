import styles from './../logoScreen.module.css'

const LogoCard = ({img}) => {
    return (
        <div className={styles.img_container}>
            <img src={img} alt=""/>
        </div>
    );
};

export default LogoCard;