import Image from 'next/image'
import styles from './Methodology.module.css'
import block1 from './../../assets/block1.svg'
import block2 from './../../assets/block2.svg'
import block3 from './../../assets/block3.svg'
import block4 from './../../assets/block4.svg'

const GridComponent = () => {
    return (
        <div className={styles.box_content}>
            <div className={styles.content}>
                <Image src={block1} alt="Разминка" />
                <h2 className={styles.text}>Разминка</h2>
                <h3 className={styles.description}>для моторно-двигательной памяти</h3>
            </div>
            <div className={styles.content}>
                <Image src={block2} alt="Песни" />
                <h2 className={styles.text}>Песенки и аудио-уроки</h2>
                <h3 className={styles.description}>для слуховой памяти</h3>
            </div>
            <div className={styles.content}>
                <Image src={block3} alt="Мнемокарточки" />
                <h2 className={styles.text}>Мнемокарточки</h2>
                <h3 className={styles.description}>для зрительной и ассоциативной памяти</h3>
            </div>
            <div className={styles.content}>
                <Image src={block4} alt="Игры" />
                <h2 className={styles.text}>Игры</h2>
                <h3 className={styles.description}>для эмоциональной памяти</h3>
            </div>
        </div>
    )
}

export default GridComponent
