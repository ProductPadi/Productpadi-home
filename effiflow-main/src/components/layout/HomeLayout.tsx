import { Outlet } from 'react-router-dom'
import Header from './Header'
import { ToastContainer } from 'react-toastify';

export default function HomeLayout() {
  return (
      <div className="">
        <Header />
 
        <main className="!mt-20 absolute">
          <Outlet />
        </main>

        <ToastContainer />
        
      </div>
  )
}