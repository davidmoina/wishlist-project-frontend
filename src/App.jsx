import { Auth0Provider } from "@auth0/auth0-react"
import TasksProvider from "./context/TasksProvider"
import Routing from "./routes/Routing.routes"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_API_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_API_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <TasksProvider>
        <Toaster 
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: '20px',
            background: '#333',
            color: '#fff',
          }
        }} 
        />
        <Routing/>
      </TasksProvider>
    </Auth0Provider>
  )
}

export default App
