import styles from 'styles/hero.module.css'
import Image from 'next/legacy/image'
// import cube from 'images/cube.jpg'

const cube = {
  src: 'https://images.microcms-assets.io/assets/a6237f2cea804aeb9b3120b69fe5172b/2b21730d6267487896faafcf2c91a41d/eyecatch.jpg',
  height: 1300,
  width: 1500,
  blurDataURL: 'data:image/jpeg:base64,'
}
export default function Hero ({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=''
            layout='responsive'
            sizes='(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw'
            priority
            placeholder='blur'
          />
        </figure>
      )}
    </div>
  )
}
