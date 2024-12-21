import { Outlet } from 'react-router-dom'
import Navber from '../Components/Navber'

const MainLayout = () => {
  return (
    <div>
      <header className='mx-auto w-10/12'>
        <Navber></Navber>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  )
}

export default MainLayout
