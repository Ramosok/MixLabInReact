import styles from './buttonTypical.module.css'
import stylesGlobal from './../../index.module.css'

const ButtonTypical = ({tittle,сlickAction}) => {

    return (
        <button onClick={сlickAction}
                className={[`${styles.btn__typical} ${stylesGlobal.font_roboto_medium}`]}>{tittle}</button>
    );
};

export default ButtonTypical;