import styles from './MultiForm.module.scss'

type StepFourProps = {
  onInputChange: (value: string) => void
  onBack: () => void
  onContinue: () => void
  selectedOption: string
}

const StepFour = ({
  onInputChange, onContinue, onBack, selectedOption,
}: StepFourProps) => (
  <>
    <legend>
      <span className={styles.h2}>Please choose your age</span>
    </legend>

    <label htmlFor="select">Age</label>
    <div className={styles.formGroup}>
      <select
        id="select"
        value={selectedOption || 'Select option'}
        required
        className={`${styles.formControl} ${styles.formControlText}`}
        onChange={(e) => {
          onInputChange(e.target.value)
        }}
      >
        <option>Select option</option>
        <option>0-18</option>
        <option>18-35</option>
        <option>35+</option>
      </select>
    </div>

    <div className={styles.buttonContainer}>
      <button
        className={`${styles.button} ${styles.buttonSecondary}`}
        onClick={() => {
          onBack()
        }}
      >
        Back
      </button>
      <button
        className={`${styles.button} ${styles.buttonPrimary}`}
        onClick={() => {
          onContinue()
        }}
      >
        Continue
      </button>
    </div>

  </>
)

export default StepFour
