import styles from "./Button.module.scss";


interface IPropsButton {
  onClickBtn?: React.MouseEventHandler<HTMLButtonElement>,
  textBtn: string,
  className?: string,
  active?: boolean,
  value?: string
}

const Button : React.FC<IPropsButton> = ({onClickBtn, textBtn, className = "", active = false, value}) => {
  return (
    <button 
      className={`${styles.button} ${styles[className]} ${active ? styles.active : ""}`}
      onClick={onClickBtn}
      value={value}
    >
      {textBtn}
    </button>
  )
}

export default Button