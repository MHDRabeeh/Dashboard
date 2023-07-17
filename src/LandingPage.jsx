import { BsCalendarEvent, BsPeopleFill, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FaBoxes } from "react-icons/fa";
import Message from "./Message";
import Chart from "./Chart"

function LandingPage() {
    let data = [
        { title: "Home" },
        { title: "Dashboard" },
        { title: "File Management" },
        { title: "Settings" }
    ]
    let dataTwo = [
        { title: "Products", count: "15+", icon: <FaBoxes />, iconColor: "text-[#fb923c]", iconBg: "bg-orange-100" },
        { title: "Customers", count: "190+", icon: <BsPeopleFill />, iconColor: "text-[#10b981]", iconBg: "bg-[#dcfce7]" },
        {
            title: "Open Files", count: "190+", icon: <BsFillFileEarmarkTextFill />, iconColor: "text-[#8b5cf6]", iconBg:
                "bg-[#ddd6fe]"
        }
    ]
    return (
        <div className='mt-5 mr-5 mb-5 w-full bg-white rounded-3xl box-border flex divide-x'>
            <div className="w-full rounded-l-3xl">
                <div className="flex content-center">
                    <div className="">
                        <ul className="flex mt-4 box-border ">
                            {
                                data.map((item, index) => (
                                    <>
                                        <li key={index} className="p-2 pb-0 cursor-pointer hover:text-violet-600 ml-20
                                         text-sm 
                                        font-medium hover:border-b-4 border-violet-600 duration-100">{item.title}</li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="text-sm cursor-pointer font-medium  w-60 p-4  mt-4 ml-20 mr-0 bg-white shadow-lg 
                    rounded-xl 
                    hover:bg-[#fbfcf8] duration-100"><span
                            className="inline p-3 bg-orange-100 rounded-full "><BsCalendarEvent
                                className="text-[#fb923c] inline  text-2xl " /></span>
                        <span className="ml-3">25 Feb 2023</span></div>

                </div>
                <div className=" w-[95%] h-[14%]  mt-7 ml-4  grid grid-cols-3 gap-5">
                    {
                        dataTwo.map((item, index) => (
                            <>
                                <div key={index} className={` rounded-xl flex  items-center box-border shadow-lg 
                                cursor-pointer hover:p-1
                                 duration-100
                                 hover:bg-[#fbfcf8]
                                `}>
                                    <div className={`ml-8 p-4 ${item.iconBg} rounded-2xl`} >
                                        <span className={`text-2xl ${item.iconColor}`}>
                                            {item.icon}</span></div>

                                    <div>
                                        <h1 className={`${item.iconColor} text-3xl -mt-3 ml-2 font-semibold`}>{item.count}</h1>
                                        <span className="text-sm ml-2 font-medium">{item.title}</span>
                                    </div>
                                </div>
                            </>
                        ))
                    }

                </div>
                <div className="grid grid-cols-2  mt-5"> <h1 className="ml-4 font-bold"> Tasks</h1> <h1 className="ml-4 font-bold">Statistics</h1></div>
                <div className="grid grid-cols-2  w-auto m-3 h-[60%] gap-4 rounded-lg ">
                    <div className="grid grid-cols-1 gap-y-0 items-center  item-center  rounded-lg bg-[#fbfcf8] ">
                        <div className="flex">
                            <input type="radio" className="ml-3 custom-radio" />
                            <h1 className="ml-3  -mt-1 text-sm font-medium">Update ticket report</h1>
                            <span className="ml-72 text-lg font-medium ">05</span>
                        </div>
                        <div className="flex">
                            <input type="radio" className="ml-3 custom-radio" />
                            <h1 className="ml-3 text-sm font-medium -mt-1 ">Finish ticket update</h1>
                            <span className="ml-72 text-lg font-medium ">03</span>
                        </div>
                        <div className="flex">
                            <input type="radio" className="ml-3 custom-radio" />
                            <h1 className="ml-3  -mt-1 text-sm font-medium ">Update ticket report</h1>
                            <span className="ml-72 text-lg font-medium ">08</span>
                        </div>
                        <div className="flex">
                            <input type="radio" className="ml-3 custom-radio" />
                            <h1 className="ml-3  -mt-1 text-sm font-medium " >Finish ticket update</h1>
                            <span className="ml-72 text-lg font-medium ">01</span>
                        </div>
                        <div className="flex">
                            <input type="radio" className="ml-3 custom-radio" />
                            <h1 className="ml-3  -mt-1 text-sm font-medium ">Update ticket report</h1>
                            <span className="ml-72 text-lg font-medium ">03</span>
                        </div>
                        <div className="flex">
                            <input type="radio" className="ml-3 custom-radio" />
                            <h1 className="ml-3  -mt-1 text-sm font-medium ">Finish ticket update</h1>
                            <span className="ml-72 text-lg font-medium ">02</span>
                        </div>
                        <div className=" flex justify-center">
                            <button className="border border-[#fdba74] text-[#fdba74] bg-[#ffedd5] py-2 px-4 mt-2 rounded-full font-medium">
                                <span className="text-lg text-[#fdba74] mr-1">+</span> Create Task
                            </button>
                        </div>
                    </div>
                    <div className="  grid  gap-3">
                        <div className="bg-[#f5f3ff]"> 
                          <Chart element={"bar"}/>
                        </div>
                        <div  className="bg-[#f5f3ff] rounded-lg">
                        <Chart element={"area"}/>
                        </div>
                    </div>
                </div>
            </div>
           <Message/>

            
        </div>
    )
}

export default LandingPage
