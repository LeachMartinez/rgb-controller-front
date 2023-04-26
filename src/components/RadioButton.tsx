import styles from "./RadioButton.module.scss";
interface IRadioButtonProps {
  name: string,
  value: string,
  title: string
}
const RadioButton : React.FC<IRadioButtonProps> = ({name, value, title}) => {
  return (
    <label className={styles.radioButton__label}>
      <input type="radio" className={styles.radioButton} name={name} value={value} />
      <span className={styles.radioButton__name}>{title}</span>
    </label>
  )
}

export default RadioButton;