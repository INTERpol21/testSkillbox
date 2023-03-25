import styles from "./Button.module.css"

const Button = () => {
    return (
      <div className={styles.block_btn}>
        <button
          type="submit"
          className={styles.btn}
          onClick={() => {
            console.log('Click')
          }}>
          Записаться
        </button>
      </div>
    )
}
 
export default Button;