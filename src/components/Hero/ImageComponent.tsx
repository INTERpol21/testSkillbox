import Image from 'next/image'
import styles from './Hero.module.css'

import hero from '../../assets/hero.svg'
import item from '../../assets/item.svg'
import vector from '../../assets/vector.png'
import heart from '../../assets/heart.svg'
import go from '../../assets/go.svg'

const ImageComponent = () => {
    return (
      <div className={styles.block_img}>
        <Image
          src={hero}
          alt="Hero"
          className={styles.hero}
          placeholder="blur"
          blurDataURL={'../../assets/hero.svg'}
        />
        <Image
          src={item}
          alt="item"
          className={styles.item}
          placeholder="blur"
          blurDataURL={'../../assets/item.svg'}
        />
        <Image src={vector} alt="Vector" className={styles.vector}  />
        <Image
          src={heart}
          alt="Heart"
          className={styles.heart}
          placeholder="blur"
          blurDataURL={'../../assets/heart.svg'}
        />
        <Image
          src={go}
          alt="Go"
          className={styles.go}
          placeholder="blur"
          blurDataURL={'../../assets/go.svg'}
        />
      </div>
    )
}
 
export default ImageComponent;