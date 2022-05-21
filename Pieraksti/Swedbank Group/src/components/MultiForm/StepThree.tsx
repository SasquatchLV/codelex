import styles from './MultiForm.module.scss'

type StepThreeProps = {
  onRadioChange: (value: string) => void
  onBack: () => void
  onContinue: () => void
  selectedOption: string
}

const StepThree = ({
  onRadioChange, onContinue, onBack, selectedOption,
}: StepThreeProps) => (

  <>
    <fieldset>
      <legend>
        <span className={styles.h2}>Please choose your gender</span>
      </legend>
      <div className={styles.radio}>
        <input
          type="radio"
          value="male"
          id="gender-male"
          checked={selectedOption === 'male'}
          onChange={(e) => {
            onRadioChange(e.target.value)
          }}
        />
        <label htmlFor="gender-male">Male</label>
      </div>

      <div className={styles.radio}>
        <input
          type="radio"
          value="female"
          id="gender-female"
          checked={selectedOption === 'female'}
          onChange={(e) => {
            onRadioChange(e.target.value)
          }}
        />
        <label htmlFor="gender-female">Female</label>
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
    </fieldset>
  </>

)

export default StepThree
