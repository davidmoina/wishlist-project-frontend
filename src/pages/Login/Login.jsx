import { useAuth0 } from '@auth0/auth0-react'
import styles from './login.module.scss'

export const Login = () => {

  const {loginWithRedirect} = useAuth0();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2>Welcome! 🚀 <br/> Register now to start enjoying our app and boost your productivity.</h2>
        <button onClick={loginWithRedirect} className={styles.btn}>
          <strong>LOGIN</strong>
          <div className={styles.containerStars}>
            <div className={styles.stars}></div>
          </div>

          <div className={styles.glow}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </button>

      </div>
    </div>
    
  )
}
