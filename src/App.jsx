
import './App.css'
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiMessageAltMinus } from "react-icons/bi";
import { LuClipboardList, LuSettings } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import LandingPage from './LandingPage';


function App() {
  const Menu = [
    { title: "File", icon: <BsFileEarmarkArrowDown /> },
    { title: "Schedule", icon: <AiOutlineSchedule /> },
    { title: "Message", icon: <BiMessageAltMinus /> },
    { title: "Reporting", icon: <LuClipboardList /> },
    { title: "Settings", icon: <LuSettings /> }
  ]


  return (
    <>
      <div className='bg-gradient-to-r from-violet-600 to-violet-800 w-full min-h-screen flex box-border rounded-lg'>
        <div className=' pt-8 h-screen w-72 box-border '>
          <h1 className='p-5 text-white font-semibold text-2xl text-center'> Uix.bunny</h1>
          <ul className='pt-2'>
            {Menu.map((menu, index) => (
              <>
                <li key={index} className='text-grey-300 text-sm flex item-center gap-x-4 coursor-pointer
                p-2 hover:bg-gradient-to-r from-slate-300 to-transparent rounded-r-lg text-white mt-5 p-3 duration-100
               text-base font-semibold hover:border-l-4  border-white
               '><span className='text-2xl block float-left'>{menu.icon}</span>
                  <span className='cursor-pointer -ml-2 '>{menu.title}</span></li>
              </>
            ))}

          </ul>
          <button className=' text-lx font-bold  p-4 hover:px-7 duration-300 text-white ml-4 mt-24 bg-[#fb923c]
           rounded-full'><span
              className='text-2xl block float-left font-bold '><MdAdd /></span> <span>Create</span></button>
        </div>
        <LandingPage/>

      </div>
              
    </>
  )
}

export default App
