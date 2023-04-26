import styles from "./Button.module.scss";


interface IPropsButton {
  onClickBtn?: React.MouseEventHandler<HTMLButtonElement>,
  textBtn: string,
  className?: string
}

const Button : React.FC<IPropsButton> = ({onClickBtn, textBtn, className = ""}) => {
  return (
    <button 
      className={`${styles.button} ${styles[className]}`}
      onClick={onClickBtn}
    >
      {textBtn}
    </button>
  )
}

export default Button