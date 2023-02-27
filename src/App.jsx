import Brand from "./components/Brand/Brand"
import Navbar from "./components/Navbar/Navbar"
import Header from "./containers/Header/Header"
import ListContainer from "./containers/ListContainer/ListContainer"

function App() {

  return (
    <div className="App">
      <Header>
        <Navbar/>
        <Brand/>
      </Header>
      <ListContainer/>
    </div>
  )
}

export default App
