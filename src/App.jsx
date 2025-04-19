import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <div className='min-h-[calc(100vh-285px)]' >
      <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'>
    <Outlet>
    </Outlet>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
