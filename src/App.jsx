import { Auth0Provider } from "@auth0/auth0-react"
import TasksProvider from "./context/TasksProvider"
import Routing from "./routes/Routing.routes"

function App() {

  console.log(import.meta.env.VITE_API_AUTH0_DOMAIN);

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_API_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_API_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      useRefreshTokens
      cacheLocation="localstorage"
    >
      <TasksProvider>
        <Routing/>
      </TasksProvider>
    </Auth0Provider>
  )
}

export default App
