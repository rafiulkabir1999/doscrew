'use client'
import Image from 'next/image'
import Link from 'next/link'



export default function Card(props){
 
  const handleModal = () => {
  const modal = document.getElementById("MODAL")
  modal.classList.remove("hidden")
  }

  return(
    <div className="flex flex-col p-2 shadow-noticeboard rounded gap-2 bg-white md:min-w-[340px]" >
        <div className="flex gap-2 items-center">
            <img  onClick={handleModal} src={props.details.path} className="text-[#262161] text-[25px] p-2">
            </img>
           <Link href={(props.details.name).toLowerCase()}>
           <h2 className="text-[#262161] text-[25px] font-inter font-bold">{props.details.name}</h2>
           </Link>
        </div>

          {/*Card Background Image  */}
        <div
        onClick={handleModal}
        className={` relative ${props.details.image} bg-cover w-full object-fit cursor-pointer obj-cover bg-cover w-[386px] h-[219px]`} >
          
          {/* Black Shade top of Card */}
          <div className="absolute  h-full block w-full bg-transparentBlack opacity-60">
           
          </div>
 
           {/* Card Youtube Icon */}
          <img src="./icon/youtube.svg"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30px"
          alt="" />
        </div>
        <span className="leading-[30px]">
        Lorem Ipsum is simply dummy text 
        </span>
    </div>
  )
}