import styles from '@/src/css/home.module.css';
import ParticlesNameWasTaken from '@/components/particles.jsx';

export default function Page() {
    return (
        <div className='main'>
            <div className={styles.container}>
                <h1 className={styles.header}>CORE</h1>
                <h3 className={styles.subheader}>The ultimate control panel experience</h3>
                <button className={styles.button}>Access Dashboard</button>
            </div>
            <ParticlesNameWasTaken className={styles.particles} />
        </div>
    );
}
