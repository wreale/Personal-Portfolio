import styles from './button.module.scss'

const Button = ({children, href}) => {
    return <a href={href} target="_blank" rel="noopener noreferrer"><button className={styles.button}>{children}</button></a>
}

export default Button