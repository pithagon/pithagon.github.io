import styles from "./styles.module.css";

const Loading = ({ color = "#000" }) => {
    return (
        <span className={styles.loading}>
            <span style={{ backgroundColor: color }} />
            <span style={{ backgroundColor: color }} />
            <span style={{ backgroundColor: color }} />
        </span>
    );
};

export default Loading;