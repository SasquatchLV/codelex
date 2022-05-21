import styles from './MultiForm.module.scss'

type StepSixProps = {
  onInputChange: (string: string) => void
  onBack: () => void
  onContinue: () => void
  aboutMe: string
}

const StepSix = ({
  onInputChange, onContinue, onBack, aboutMe,
}: StepSixProps) => (
  <>
    <legend>
      <span className={styles.h2}>Write about yourself in a few words</span>
    </legend>

    <>
      <div className={styles.formGroup}>
        <label htmlFor="textarea">
          Tell us about yourself
        </label>
        <br />
        <textarea
          spellCheck="false"
          id="textarea"
          value={aboutMe}
          className={`${styles.formControl} ${styles.formControlText}`}
          onChange={(e) => {
            onInputChange(e.target.value)
          }}
        />
      </div>
    </>

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

export default StepSix
