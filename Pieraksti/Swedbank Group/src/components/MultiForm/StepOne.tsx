import styles from './MultiForm.module.scss'

type StepOneProps = {
  onSave: () => void
}

const StepOne = ({
  onSave,
}: StepOneProps) => (
  <>
    <legend>
      <span className={styles.h2}>Swedbank Quiz</span>
      <br />
      <span>Welcome. Please fill out our quiz</span>
    </legend>
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.button} ${styles.buttonPrimary}`}
        onClick={() => {
          onSave()
        }}
      >
        Continue
      </button>
    </div>

  </>

)

export default StepOne
