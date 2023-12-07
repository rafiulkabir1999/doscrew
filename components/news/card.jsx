'use client'
import Image from 'next/image'
import Link from 'next/link'



export default function Card(props){
 
  const handleModal = () => {
  const modal = document.getElementById("MODAL")
  modal.classList.remove("hidden")
  }

  return(
    <div className="flex flex-col p-2 shadow-noticeboard   gap-2 bg-white md:w-[200px] md:w-[340px] xl:px-3 2xl:w-[430px]" >
        
        {/* Card Header */}
        <div className="flex  items-center ">
            <img  onClick={handleModal} src={props.details.path} className="text-[#262161] m-2 xl:w-[30px] xl:h-[30px]">
            </img>
           <Link href={(props.details.name).toLowerCase()}>
           <h2 className="text-[#262161] text-[12px] font-inter font-bold xl:text-[19px]">{props.details.name}</h2>
           </Link>
        </div>

          {/*Card Background Image  */}
        <div
        onClick={handleModal}
        className={` relative ${props.details.image}  overflow-hidden rounded-md bg-cover w-full  cursor-pointer obj-cover bg-cover w-[386px] h-[180px]`} >
          
          {/* Black Shade top of Card */}
          <div className="absolute border-md   h-full block w-full bg-transparentBlack opacity-30">
           
          </div>
 
           {/* Card Youtube Icon */}
          <img src="./icon/youtube.svg"
          className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-30px"
          alt="" />
        </div>
        <span className="leading-[30px] font-medium  xl:15px 2xl:20px">
        Lorem Ipsum is simply dummy text 
        </span>
    </div>
  )
}