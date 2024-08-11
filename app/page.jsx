import styles from '@/src/css/home.module.css';
import ParticlesNameWasTaken from '@/components/particles.jsx';

export default function Page() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>Hello World</h1>
            <h3 className={styles.subheader}>This is a paragraph</h3>
            <button className={styles.button}>Click me</button>
            <ParticlesNameWasTaken />
        </div>
    );
}
