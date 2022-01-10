import ItemMenu from "../Navigation/ItemMenu";
import ButtonTypical from "../../ButtonTypical";

import styles from './userAction.module.css'

const UserActions = () => {
    return (
        <div className={styles.user__action}>
            <ItemMenu
                tittle={'Veterinarian login'}
                linkTo={'#'}
            />
            <ButtonTypical
              tittle={'Try Mixlab'}
            />
        </div>
    );
};

export default UserActions;