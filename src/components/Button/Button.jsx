import styles from './Button.module.css'



const Button = ({isOutLine, icon, text}) => {
  return (
        <div className={isOutLine ? styles.zeroButton : styles.heroButton}>
            <button>{icon} {text}</button>
        </div>
  )
}

export default Button