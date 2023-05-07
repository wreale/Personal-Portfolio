import Icon from './Icon'
import Image from 'next/image'
import styles from './landingdetails.module.scss'
import Button from './Button';

const LandingDetails = () => {
    return <div className={styles.landingDetails}>
        <div className={styles.introText}>
            <p><strong>Hi There.</strong></p>
            <Image
                className = {styles.handEmoji}
                src={"/waveemoji.png"}
                alt={"waving hand emoji"}
                height={50}
                width={50}
            />
        </div>
        <div className={styles.blurb}>My name is <h1 className={styles.name}>Will Reale.</h1> I'm a rising junior at Syracuse University majoring in Information Managment & Technology.</div>
        <Button href="mailto: wrreale@syr.edu">Contact Me</Button>
        <hr className={styles.line}></hr>
        <div>
            <Icon name={'linkedin'} href={"https://www.linkedin.com/in/will-reale/"}/>
            <Icon name={'github'} href={"https://github.com/wreale"}/>
        </div>
        
    </div>
}

export default LandingDetails