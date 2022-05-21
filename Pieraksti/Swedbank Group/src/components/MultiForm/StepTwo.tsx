import ReactTooltip from 'react-tooltip'
import styles from './MultiForm.module.scss'

type StepTwoProps = {
  onContinue: () => void
  onBack: () => void
  onChange: (value: string) => void
  fullName: string
}

const StepOne = ({
  onContinue, onBack, onChange, fullName,
}: StepTwoProps) => (

  <>
    <legend>
      <span className={styles.h2}>Please enter your full name</span>
    </legend>
    <label htmlFor="multi-form">
      Full name
      <ReactTooltip effect="solid" />
      <p data-tip="You don't really need a tooltip for this">
        <img src="images/information.png" width="15px" style={{ marginLeft: '10px' }} alt="" />
      </p>
    </label>
    <div className={styles.formGroup}>
      <input
        type="text"
        id="multi-form"
        value={fullName}
        className={`${styles.formControl} ${styles.formControlText}`}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
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

export default StepOne
