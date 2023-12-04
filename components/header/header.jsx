"use client"
import Link from "next/link"
import MobileMenu from './mobilemenu'
export default function Header(){

  

  const handleManubar = () => {
   const menu = document.getElementById('MobileMenu')
   menu.classList.toggle('hidden')
  
  }
 

    return(
       <div className="relative">
        <div className="relative px-4 py-6 flex  items-center shadow-header fixed w-full bg-white z-40 md:px-4 md:py-2 xl:px-6  ">
        
         
        {/* Menu Icon */}
    <div className="flex flex-col gap-1 px-4 cursor-pointer md:hidden"  onClick={handleManubar}>
      <div className="w-[18px] h-[2px] rounded-full  bg-black"></div>
      <div className="w-[18px] h-[2px] rounded-full   bg-black"></div>
      <div className="w-[18px] h-[2px] rounded-full bg-black"></div>
    </div> 
    
 {/* Logo and Brand */}
     <div className="flex gap-x-2 items-center grow  md:gap-x-4">
   <Link href='/'>
   <img src="./icon/logo.svg" className="w-[28px] md:w-[50px]" alt="department of shipping" />
   </Link>
    <h2 className="text-black font-inter font-bold text-[16px] md:text-[20px] xl:text-[20px]">
      <Link href='/'>
        Department of Shipping
      </Link>
      </h2>
    </div>
    
    {/* info */}
    <div className="flex jistify-between items-center gap-x-2  xl:gap-x-12 md:flex">
     <div className="hidden  gap-x-2   p-2 md:flex">
      <img src="./icon/contact.svg" className="w-[55px]  " alt="" />
      <div className="flex flex-col justify-center item-center font-[400]  leading-[34px] shrink">
      <p className="flex text-black font-inter text-12 font-normal leading-34 gap-x-2 xl:text-[16px]">Call : <span className="text-black font-inter text-[12px] font-bold leading-34 xl:text-[20px]">09223455 </span> </p>
      <p className="flex text-black font-inter text-12 font-normal leading-34 gap-x-2 xl:text-[16px]">Mail : <span className="text-black font-inter text-[12px] font-bold leading-34 xl:text-[20px]"> info@dosinlandcrew.com</span> </p>
      </div>
     </div>
     <span className="hidden md:block">
      <img src="./icon/devidericon.svg" className="" alt="" />
     </span>

   {/* Login  */}
   <Link href='/login'>
   <div className="flex items-center py-2 gap-2 md:gap-2 cursor-pointer">
     <p className="text-black text-center font-inter text-[9px] font-bold leading-normal md:text-[16px]">Login</p>
     <img src="./icon/usericon.svg"  className ='w-[28px] md:w-[55px] ' alt="" />
     </div>
   </Link>
    </div>

   
        </div>


       <div id='MobileMenu' className="block absolute z-40 w-0 transition-all ease-in-out delay-150  md:hidden" >
         <MobileMenu />
       </div>
       

       </div>
    )
}