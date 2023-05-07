import Image from 'next/image'
import styles from './icon.module.scss'

const Icon = ({name, href}) => {
    return <a href={href} target="_blank" rel="noopener noreferrer">
        <Image 
        className={styles.icon} 
        src={`/icons/${name}.svg`}
        alt={`${name} icon`}
        height={30}
        width={30}
    />
    </a>
    
}

export default Icon