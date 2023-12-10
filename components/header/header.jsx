"use client"
import Link from "next/link"
import MobileMenu from './mobilemenu'
import { useState } from "react"
export default function Header(){

  
  const [MobileNav , SetMobileNav] = useState(false)
  
  const handleManubar = () => {
  //  const menu = document.getElementById('MobileMenu')
  //  menu.classList.toggle('hidden')
  SetMobileNav(prev => !prev)
  
  }
 

    return(
       <div className="relative">
<<<<<<< HEAD
        <div className="relative text-[12px] py-3  flex  items-center shadow-header fixed w-full bg-white z-40 sm:py-4  md:py-2 xl:px-6 xl:py-3 2xl:px-10 2xl:py-[17px]  ">
=======
        <div className="relative text-[12px] py-3  flex  items-center shadow-header fixed w-full bg-white z-40 sm:py-4  md:py-2 xl:px-6 xl:py-4  ">
>>>>>>> 430f3a58ac7e567ce92d578cdaca879a96177b78
        
         
 {/* Menu Icon */}
    <div className="flex flex-col gap-1 px-4 cursor-pointer md:hidden xl:px-4"  onClick={handleManubar}>
      <div className="w-[18px] h-[2px] rounded-full  bg-black"></div>
      <div className="w-[18px] h-[2px] rounded-full   bg-black"></div>
      <div className="w-[18px] h-[2px] rounded-full bg-black"></div>
    </div> 
    
 {/* Logo and Brand */}
     <div className="flex gap-2 items-center grow xl:gap-4 2xl:gap-3">
        <Link href='/'>
        <img src="./icon/logo.svg" className="w-[29px] h-[29px] md:w-[50px] xl:w-[50px] xl:h-[50px] 2xl:p-[4px] 2xl:w-[68px] 2xl:h-[68px]" alt="department of shipping" />
        
        {/* Department of shipping */}
        </Link><Link href='/'>
            <h2 className="text-black font-inter font-bold  text-[12px] sm:text-[14px]  md:text-[16px] xl:text-[25px] 2xl:text-[30px]"> 
              Department of Shipping
            </h2></Link>
    </div>
    
  {/* info */}
    <div className="flex jistify-between items-center gap-x-4  xl:gap-x-16 md:flex">
     <div className="hidden  xl:gap-x-2  2xl:gap-x-0  md:flex md:justify-center md:items-center">
      <img src="./icon/contact.svg" className="w-[29px] h-[29px]  md:h-[30px] md:w-[30px] xl:w-[50px] xl:h-[50px] 2xl:w-[67px] 2xl:h-[67px] 2xl:p-[4px]" alt="" />

      <table className="table table-auto  border-separate 2xl:border-spacing-2">
        <tbody className="space-y-2 2xl:space-y-6 ">
        <tr className=" ">
          <td>
             <div className="flex text-black  font-inter text-sm font-normal leading-34 gap-x-2 md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[17px]">Call</div>
          </td>
          <td className=" font-bold">: </td>
         <td>
         <div className="text-black  text-sm font-bold  leading-34 font-inter md:text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[17px]"> 01576400104, 01576400105</div>
         </td>
           </tr>

           <tr className="">
          <td>
             <div className="flex text-black  font-inter text-sm font-normal  md:text-[11px] lg:text-[12jpx]  gap-x-2 xl:text-[13px] 2xl:text-[17px]">Mail</div>
          </td>
          <td className=" font-bold">:</td>
         <td>
         <div className="text-black  text-sm font-bold  leading-34 font-inter md:text-[11px] lg:text-[12px]   xl:text-[13px] 2xl:text-[17px]"> dos.support@dream71.com</div>
         </td>
           </tr>
        </tbody>
      </table>
      
     </div>
          {/* devider between info and login */}
          <span className="hidden md:block">
            <img src="./icon/devidericon.svg" className=" " alt="" />
          </span>

   {/* Login  */}
   <Link href='/login'>
   <div className="flex items-center px-4 gap-2 md:gap-2 cursor-pointer">
     <p className="text-black text-center font-inter text-[9px] font-bold font-inter leading-normal sm:text-[11px] md:text-[12px] xl:text-[15px] 2xl:text-[20px]">Login</p>
     <img src="./icon/usericon.svg"  className ='w-[29px] h-[29px] md:w-[30px] xl:w-[50px] xl:h-[50px] 2xl:w-[66px] 2xl:h-[66px] 2xl:w-[66px] 2xl:p-[4px]' alt="" />
     </div>
   </Link>
    </div>

   
        </div>


       <div id='MobileMenu' className={`${MobileNav ? "translate-x-[0px]" : "-translate-x-[999px]" } " block absolute z-[100] w-0 transition-all ease-in-out delay-200  md:hidden`} >
         <MobileMenu />
       </div>
       

       </div>
    )
}