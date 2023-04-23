import './mainContainer.scss'

const MainContainer = ({children}) => {

  return (
    <div className='tasks-section'>          
        {children}
    </div>
  )
}

export default MainContainer