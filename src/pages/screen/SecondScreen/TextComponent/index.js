import styles from './../secondSceen.module.css';

const TextComponent = ({body,tittle}) => {
    return (
        <div className={styles.right_block_container}>
            <h2 className={styles.right_block_tittle}>{tittle}</h2>
            <p className={styles.right_block_body}>{body}</p>
        </div>
    );
};

export default TextComponent;