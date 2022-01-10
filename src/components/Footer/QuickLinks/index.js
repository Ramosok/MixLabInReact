import styles from './../footer.module.css'

const QuickLinks = ({linkTo, tittleLink}) => {

    return (
        <a className={styles.color_text_link} href={linkTo}>{tittleLink}</a>
    );
};

export default QuickLinks;