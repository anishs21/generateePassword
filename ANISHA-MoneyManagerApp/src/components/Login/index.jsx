import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import LinearBuffer from './status'
export const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordPercentage, setPasswordPercentage] = useState(0)
  const [showMessage, setShowMessage] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    setShowMessage(generateStrongPassword())
  }, [])
  function setUserNameFunction(event) {
    setUserName(event.target.value)
    console.log(userName, event.target.value)
  }
  function setPassWordFunction(event) {
    const currentPassword = event.target.value

    const hasUppercase = /[A-Z]/.test(currentPassword)
    const hasLowercase = /[a-z]/.test(currentPassword)
    const hasNumber = /\d/.test(currentPassword)
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
      currentPassword,
    )

    let strengthPercentage = 0
    if (currentPassword.length >= 8) {
      strengthPercentage += 25
    }
    if (hasUppercase) {
      strengthPercentage += 25
    }
    if (hasLowercase) {
      strengthPercentage += 25
    }
    if (hasNumber) {
      strengthPercentage += 25
    }
    if (hasSpecialChar) {
      strengthPercentage += 25
    }
    const finalPercentage = Math.min(strengthPercentage, 100)

    setPasswordPercentage(finalPercentage)
    setPassword(currentPassword)
  }
  function generateStrongPassword() {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()-_=+[{]}|;:,<.>/?'

    const allChars = lowercase + uppercase + numbers + symbols

    let password = ''

    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    for (let i = 0; i < 4; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    password = password
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('')

    return password
  }

  function loginFunction() {
    if (passwordPercentage === 100) {
      console.log('Login')
      navigate('/money-manager')
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <h2 style={{textAlign: 'center'}}>
          <strong>Sign Up</strong>
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <input
          value={userName}
          placeholder="UserName"
          type="text"
          style={{marginBottom: '10px'}}
          onChange={setUserNameFunction}
        />
        <input
          onChange={setPassWordFunction}
          placeholder="password"
          type="password"
          value={password}
        />
        <button
          style={{
            height: 'fit-content',
            width: 'fit-content',
            marginTop: '10px',
          }}
          onClick={loginFunction}
        >
          sign up
        </button>

        <LinearBuffer passwordPercentage={passwordPercentage} />
        <h4>Recommended Strong Password: {showMessage} </h4>

        <h4>Criteria</h4>
        <p>
          Password should contain atlease one Upper Case, atleast one lower Case
          , atleast one number atleast one Symbol with length &gt;=8
        </p>
      </div>
    </div>
  )
}
