import { useAuth0 } from "@auth0/auth0-react"

export const useUsers = () => {

  const { VITE_API_SERVER_URL } = import.meta.env
  const { user: {name, email, picture} } = useAuth0()

  const checkUser = async() => {

    try {
      
      const response = await fetch(`${VITE_API_SERVER_URL}/user/signup/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body : JSON.stringify({name, email, picture})
      })

      const result = await response.json();

      console.log(result);
      window.localStorage.setItem("userId", result._id)
      return result.id

    } catch (error) {
      console.error(error);
    }
  }

  return { checkUser }
}
