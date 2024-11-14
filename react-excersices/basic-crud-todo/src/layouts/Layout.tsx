import { NavLink, Outlet } from 'react-router-dom'


export default function Layout() {
 
  return (
    <>
      <div className='w-full flex p-4 gap-4'>
        <NavLink 
          to={'/'}
          className={({isActive}) => `${isActive ? 'bg-gray-200 font-semibold underline' : ''} hover:bg-gray-100 px-6 py-1  rounded-lg`}
        >Home</NavLink>
        <NavLink 
          to={'/notes'}
          className={({isActive}) => `${isActive ? 'bg-gray-200 font-semibold underline' : ''} hover:bg-gray-100 px-6 py-1  rounded-lg`}
        >Notes</NavLink>
      </div>
      <div className='h-full w-full'>
        <Outlet />

      </div>
    </>
  )
}
