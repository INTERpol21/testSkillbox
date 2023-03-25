import GridComponent from './GridComponent'
import IconComponent from './IconComponent'
import styles from './Methodology.module.css'

export const Methodology = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <div className={styles.box_tittle}>
            <h1 className={styles.tittle}>Инструменты методики</h1>
          </div>
          <div className={styles.box_description}>
            <h3 className={styles.description}>
              В родном языке каждое понятие у нас ассоциируется с целой гаммой звуков, запахов,
              ощущений, воспоминаний. Однако, стараясь расширить лексикон детей иностранными
              словами, им обычно предлагают только такую бедную и сухую ассоциацию, как
              последовательность букв или, в лучшем случае, цветную картинку.
              <br /> <br />
              Но у нас, у взрослых и тем более у детей много разных видов памяти и каналов
              восприятия! Мы решили попробовать задействовать их все! И вот что у нас получилось:
            </h3>
          </div>
          <IconComponent />
          <GridComponent />

          <h2 data-content="Каждая деталь выполняет свою функцию, " className={styles.footer}>
            и все вместе они работают на общий результат!
          </h2>
        </div>
      </div>
    </div>
  )
}
