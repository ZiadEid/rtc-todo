import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='pt-2 px-2 md:px-0'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout