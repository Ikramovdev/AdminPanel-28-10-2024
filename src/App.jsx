import './App.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import CustomRoutes from './routes'

function App() {

  return (
    <>
      <div className=''>
        <Header/>
        <div className='flex'>
          <Navbar/>
          <div className='w-[78%] h-[58.5vh]'>
          <div>
            <CustomRoutes/>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
