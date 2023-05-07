import Skill from './Skill.js'
import styles from './skills.module.scss'
import SectionHeader from './SectionHeader'

const Skills = () => {
    return <div className = {styles.skills}>
        <SectionHeader>Skills:</SectionHeader>
        <div className={styles.skillsList}>
            <Skill name={"html5"}/>
            <Skill name={"css3"}/>
            <Skill name={"javascript"}/>
            <Skill name={"react"}/>
            <Skill name={"sass"}/>
            <Skill name={"python"}/>
        </div>
    </div>
}

export default Skills