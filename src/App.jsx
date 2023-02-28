import Brand from "./components/Brand/Brand"
import Navbar from "./components/Navbar/Navbar"
import Header from "./containers/Header/Header"
import MainContainer from "./containers/MainContainer/MainContainer"

function App() {

  return (
    <div className="App">
      <Header>
        <Navbar/>
        <Brand/>
      </Header>
      <MainContainer/>
    </div>
  )
}

export default App
