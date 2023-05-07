import Image from 'next/image'
import styles from './skill.module.scss'

const Skill = ({name}) => {
    return <div className={styles.skill}>
        <Image 
            src={`/skills/${name}.svg`}
            alt={`${name} icon`}
            height={70}
            width={70}
        />
    </div>
}

export default Skill