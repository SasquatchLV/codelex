import styles from './MultiForm.module.scss'

type StepSevenProps = {
  onBack: () => void
  fullName: string
  gender: string
  age: string
  likedAnimals: string[]
  aboutMe: string
}

const StepSeven = ({
  onBack, fullName, gender, age, likedAnimals, aboutMe,
}: StepSevenProps) => (
  <>
    <legend>
      <span className={styles.h2}>Here is the summary of your answers</span>
    </legend>
    <legend>
      <h3>Your full name:</h3>
      {fullName}
    </legend>
    <legend>
      <h3>Your gender:</h3>
      {gender}
    </legend>
    <legend>
      <h3>Your age:</h3>
      {age}
    </legend>
    <legend>
      <h3>Your top animal picks:</h3>
      {likedAnimals.join(', ')}
    </legend>
    <legend>
      <h3>You said about yourself:</h3>
      {aboutMe}
    </legend>

    <div className={styles.buttonContainer}>
      <button
        className={`${styles.button} ${styles.buttonSecondary}`}
        onClick={() => {
          onBack()
        }}
      >
        Back
      </button>
    </div>
  </>
)

export default StepSeven
