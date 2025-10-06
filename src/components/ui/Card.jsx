import styles from './Card.module.css';

function Card({ title, tipo,onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <h3 className={styles.card_title}>{title}</h3>
            <p className={styles.card_info}>{tipo}</p>
        </div>
    );
}

export default Card;