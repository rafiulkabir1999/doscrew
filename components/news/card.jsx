import { BsHouseGearFill } from "react-icons/bs";
import Image from 'next/image'
import Link from 'next/link'


export default function Card(props){
 
  return(
    <div className="flex flex-col p-2 shadow-noticeboard rounded gap-2 bg-white md:min-w-[340px]" >
        <div className="flex gap-2 items-center">
            <img src={props.details.path} className="text-[#262161] text-[25px] p-2">
            </img>
           <Link href={(props.details.name).toLowerCase()}>
           <h2 className="text-[#262161] text-[25px] font-inter font-[700]">{props.details.name}</h2>
           </Link>
        </div>
        <img className="" src="./card1.png" alt="" />
        <span className="leading-[30px]">
        Lorem Ipsum is simply dummy text 
        </span>
    </div>
  )
}