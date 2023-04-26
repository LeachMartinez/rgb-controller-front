import styles from "./Input.module.scss";

interface IInputProp {
  id: string,
  labelText: string,
  type?: string,
  max?: number,
  min?: number
}

const Input : React.FC<IInputProp> = ({id, labelText, type, max, min}) => {
  return (
    <div className={styles.input__wrapper}>
      <label className={styles.input__label} htmlFor={id}>{labelText}</label>
      <div className={styles.input__block}>
        <input className={styles.input} type={type} max={max} min={min} name={id} id={id} />
      </div>
    </div>
  )
}

export default Input