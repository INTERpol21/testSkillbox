import Image from 'next/image'
import styles from './Methodology.module.css'

import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'


const IconComponent = () => {
    return (
      <div className={styles.block_img}>
        <Image src={icon1} alt="icon1" className={styles.icon1}  />
        <Image src={icon2} alt="icon2" className={styles.icon2}  />
        <Image src={icon3} alt="icon3" className={styles.icon3}  />
        <Image src={icon4} alt="icon4" className={styles.icon4}  />
      </div>
    )
}
 
export default IconComponent;