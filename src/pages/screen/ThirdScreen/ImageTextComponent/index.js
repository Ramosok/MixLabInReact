import styles from './../thirdScreen.module.css';

const ImageTextComponent = ({img, tittle, body}) => {
    return (
        <div className={styles.image_text_component_container}>
            <div>
                <img src={img} alt=""/>
            </div>
            <h3 className={styles.right_block_tittle}>{tittle}</h3>
            <p>{body}</p>
        </div>
    );
};

export default ImageTextComponent;