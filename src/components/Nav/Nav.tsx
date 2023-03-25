import Link from 'next/link'
import styles  from './Nav.module.css'
import logoIcon from "../../assets/logo.svg"
import Image from 'next/image'



export const Nav = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.nav__item}>
          <div className={styles.header__logo}>
            <Image src={logoIcon} alt="Иконка" />
          </div>
        </Link>
        <div className={styles.nav}>
          <Link href="/" className={styles.nav__item}>
            <h3 className={styles.nav__item__text}>О методике</h3>
          </Link>
          <Link href="/" className={styles.nav__item}>
            <h3 className={styles.nav__item__text}>Формы</h3>
          </Link>
          <Link href="/" className={styles.nav__item}>
            <h3 className={styles.nav__item__text}>Отзывы</h3>
          </Link>
          <Link href="/" className={styles.nav__item}>
            <h3 className={styles.nav__item__text}>Войти</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}
