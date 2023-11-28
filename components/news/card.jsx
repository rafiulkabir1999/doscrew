import { BsHouseGearFill } from "react-icons/bs";
import Image from 'next/image'


export default function Card(props){
 
  return(
    <div className="flex flex-col p-4 shadow-noticeboard rounded gap-2 md:min-w-[340px]" >
        <div className="flex gap-2 items-center">
            <span className="text-[#262161] text-[25px]">
                <BsHouseGearFill/>
            </span>
           <h2 className="text-[#262161] text-[25px] font-inter font-[700]">{props.details.name}</h2>
        </div>
        <img className="max-h-[219px]" src="./card1.png" alt="" />
        <span className="leading-[30px]">
        Lorem Ipsum is simply dummy text 
        </span>
    </div>
  )
}