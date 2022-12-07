import Searchbar from '../searchbar/Searchbar'
import styles from './HeroHeader.module.css'

export default function HeroHeader(): JSX.Element {
    return <>
        <header className={styles.hero + ' flex m-0 py-80 px-15'}>
            <div className={styles.content + ' flex flex-direction-column m-0 pt-50'}>
                <h1 className='Text_text Text_size-h33 Text_color-whiteFFFFFF m-0 mb-30'>
                Лучшие бесплатные стоковые фото, изображения без роялти и видео от талантливых авторов.
                </h1>
                <Searchbar></Searchbar>
            </div>
            <img className={styles.img + ' m-0'} src="https://images.pexels.com/photos/13520067/pexels-photo-13520067.jpeg?auto=compress&bri=5&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1">
            </img>
        </header>
    </>
}