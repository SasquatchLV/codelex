import styles from './MultiForm.module.scss'

type StepFiveProps = {
  onInputChange: (likedAnimals: string[]) => void
  onBack: () => void
  onContinue: () => void
  likedAnimals: string[]
}

const animals = [
  { name: 'Dog' },
  { name: 'Cat' },
  { name: 'Parrot' },
  { name: 'Fly' },
  { name: 'Lion' },
  { name: 'Rhino' },
]

const StepFive = ({
  onInputChange, onContinue, onBack, likedAnimals,
}: StepFiveProps) => (
  <>
    <legend>
      <span className={styles.h2}>Which of these animals are your favorite?</span>
    </legend>

    {animals.map(({ name }, index) => {
      const isChecked = likedAnimals.includes(name)

      return (

        <>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              checked={isChecked}
              id={name}
              onChange={() => {
                let arr = []
                if (isChecked) {
                  arr = likedAnimals.filter((animal) => animal !== name)
                  // arr = likedAnimals.splice(index, 1)
                } else {
                  arr = [...likedAnimals, name]
                }
                onInputChange(arr)
              }}
            />
            <label key={name} htmlFor={name}>
              {' '}
              {name}
            </label>
          </div>
        </>
      )
    })}

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

export default StepFive
