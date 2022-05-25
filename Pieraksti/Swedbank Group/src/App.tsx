import './App.scss'
import { useState } from 'react'
import StepOne from './components/MultiForm/StepOne'
import StepTwo from './components/MultiForm/StepTwo'
import StepThree from './components/MultiForm/StepThree'
import StepFour from './components/MultiForm/StepFour'
import StepFive from './components/MultiForm/StepFive'
import StepSix from './components/MultiForm/StepSix'
import StepSeven from './components/MultiForm/StepSeven'
import styles from './components/MultiForm/MultiForm.module.scss'

const initialFormData = {
  fullName: '',
  gender: '',
  age: '',
  likedAnimals: [] as string[],
  aboutMe: '',
}

const App = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [error, setError] = useState('')

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <fieldset>
            {activeQuestion === 0 && (
              <StepOne
                onSave={() => {
                  setActiveQuestion(activeQuestion + 1)
                }}
              />
            )}

            {activeQuestion === 1 && (
              <StepTwo
                onChange={(value) => {
                  setFormData({ ...formData, fullName: value })
                }}
                onBack={() => {
                  setError('')
                  setActiveQuestion(activeQuestion - 1)
                }}
                onContinue={
                  () => {
                    setError('')
                    if (!formData.fullName) {
                      setError('Error: Please enter your full name')
                      return
                    }
                    setActiveQuestion(activeQuestion + 1)
                  }
                }
                fullName={formData.fullName}
              />
            )}

            {activeQuestion === 2 && (
              <StepThree
                onRadioChange={(value) => {
                  setFormData({ ...formData, gender: value })
                }}
                onBack={() => {
                  setError('')
                  setActiveQuestion(activeQuestion - 1)
                }}
                onContinue={() => {
                  setError('')
                  if (!formData.gender) {
                    setError('Error: Please choose your gender')
                    return
                  }
                  setActiveQuestion(activeQuestion + 1)
                }}
                selectedOption={formData.gender}
              />
            )}

            {activeQuestion === 3 && (
              <>
                <StepFour
                  onInputChange={(value) => {
                    setFormData({ ...formData, age: value })
                  }}
                  onBack={() => {
                    setError('')
                    setActiveQuestion(activeQuestion - 1)
                  }}
                  onContinue={() => {
                    setError('')
                    if (formData.age === 'Select option') {
                      setError('Error: Please enter your age')
                      return
                    }
                    setActiveQuestion(activeQuestion + 1)
                  }}
                  selectedOption={formData.age}
                />

              </>
            )}

            {activeQuestion === 4 && (
              <>
                <StepFive
                  onInputChange={
                    (likedAnimals) => {
                      setFormData({ ...formData, likedAnimals: [...likedAnimals] })
                    }
                  }
                  likedAnimals={formData.likedAnimals}
                  onBack={() => {
                    setError('')
                    setActiveQuestion(activeQuestion - 1)
                  }}
                  onContinue={() => {
                    setError('')
                    if (formData.likedAnimals === [] || formData.likedAnimals === undefined) {
                      setError('Error: Please choose your liked animals')
                      return
                    }
                    setActiveQuestion(activeQuestion + 1)
                  }}
                />
              </>
            )}

            {activeQuestion === 5 && (
              <>
                <StepSix
                  onInputChange={
                    (aboutStr) => {
                      setFormData({ ...formData, aboutMe: aboutStr })
                    }
                  }
                  aboutMe={formData.aboutMe}
                  onBack={() => {
                    setError('')
                    setActiveQuestion(activeQuestion - 1)
                  }}
                  onContinue={() => {
                    setError('')
                    if (formData.aboutMe === '') {
                      setError('Error: Please write something about yourself')
                      return
                    }
                    setActiveQuestion(activeQuestion + 1)
                  }}
                />
              </>
            )}

            {activeQuestion === 6 && (
              <>
                <StepSeven
                  fullName={formData.fullName}
                  gender={formData.gender}
                  age={formData.age}
                  likedAnimals={formData.likedAnimals}
                  aboutMe={formData.aboutMe}
                  onBack={() => {
                    setError('')
                    setActiveQuestion(activeQuestion - 1)
                  }}
                />
              </>
            )}
          </fieldset>

          {error && (
            <div className={styles.error}>
              <p>{error}</p>
            </div>
          )}

        </div>
      </div>

    </>
  )
}

export default App
