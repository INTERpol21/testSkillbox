import styles from './WhatWeTeach.module.css'

export const WhatWeTeach = () => {
  return (
    <div className={styles.container}>
      
        <h1 className={styles.tittle}>Чему мы учим</h1>
        <div className={styles.box_content}>
          <div>
            <p className={styles.tag}>1</p>
            <div className={styles.description_block}>
              <h2 className={styles.description}>
                Говорить
                <br /> по-английски
              </h2>
            </div>

            <h3 className={styles.text}>
              Мы учим говорить по-английски, а не <br /> вставлять пропущенные буквы в <br />
              непонятные предложения.
            </h3>
          </div>
          <div>
            <p className={styles.tag}>2</p>
            <div className={styles.description_block}>
              <h2 className={styles.description}>
                Высказывать свои <br /> мысли
              </h2>
            </div>

            <h3 className={styles.text}>
              Мы учим выражать свои мысли и желания <br /> средствами другого языка, а не <br />
              бессмысленно зазубривать чужие тексты.
            </h3>
          </div>
          <div>
            <p className={styles.tag}>3</p>
            <div className={styles.description_block}>
              <h2 className={styles.description}>
                Разговаривать <br /> предложениями
              </h2>
            </div>

            <h3 className={styles.text}>
              Мы с первых уроков учим детей строить <br /> свою речь из предложений, а не <br />
              заучивать отдельные слова, мертвым <br /> грузом лежащие в памяти.
            </h3>
          </div>
        </div>
      </div>
   
  )
}
