import styles from './../footer.module.css'

const Arddess = ({city, address, MonSat}) => {
    return (
        <div className={styles.address_block}>
            <h3>{city}</h3>
            <p>{address}</p>
            <p>{MonSat}</p>
        </div>
    );
};

export default Arddess;