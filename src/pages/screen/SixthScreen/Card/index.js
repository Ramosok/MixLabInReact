import styles from './../sixthScreen.module.css';

const Card = ({img, date, tittle, body, link}) => {
    return (
        <div className={styles.card}>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className={styles.card_date}>{date}</div>
            <div className={styles.card_tittle}>{tittle}</div>
            <div className={styles.card_body} >{body}</div>
            <div className={styles.link}><a href="#">{link}</a></div>
        </div>
    );
};

export default Card;