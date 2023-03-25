
import Button from '../UI/Button/Button'
import styles from './../Hero/Hero.module.css'
import ImageComponent from './ImageComponent'

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_tittle}>
          <h1 className={styles.tittle}>
            Английский для <br /> детей от 5 до 10 лет
          </h1>
        </div>
        <div className={styles.box_description}>
          <h3 className={styles.description}>
            Занятия проходят по уникальной методике, которая помогает детям в первую очередь
            заговорить на английском.
          </h3>
        </div>
        {/* Вынес в отдельные компоненты по привычки и для удобства */}
        <Button />
        <ImageComponent/>
      </div>
    </div>
  )
}
