import styles from './sectionheader.module.scss'
const SectionHeader = ({children}) => {
    return <h2 className={styles.sectionheader}>{children}</h2>
}
export default SectionHeader