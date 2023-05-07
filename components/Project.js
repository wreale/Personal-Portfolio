import Image from 'next/image'
import styles from './project.module.scss'
import Button from './Button'

const Project = ({name, slug, children, href}) => {
    return <div className={styles.project}>
        <div className={styles.text}>
            <h3>{name}</h3>
            <p>{children}</p>
            <Button href={href}>Live Demo</Button>
        </div>
        <Image className={styles.image} 
            src={`/projects/${slug}.jpg`}
            alt={`${name} project`}
            height={528}
            width={1000}
        />
    </div>
}
export default Project