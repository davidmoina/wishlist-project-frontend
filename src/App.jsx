import TasksProvider from "./context/TasksProvider"
import Routing from "./routes/Routing.routes"

function App() {

  return (
    <TasksProvider>
      <Routing/>
    </TasksProvider>
  )
}

export default App
