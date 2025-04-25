import { Outlet } from 'react-router-dom'
import Navber from '../Components/Navber'
import Footer from '../Components/Footer'
import ChatSupport from '../Pages/ChatSupport'

const MainLayout = () => {
  return (
    <div>
      <header className='mx-auto lg:w-11/12'>
        <Navber></Navber>
      </header>
      <main>
        <Outlet></Outlet>
        <ChatSupport></ChatSupport>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default MainLayout
