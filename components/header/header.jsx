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
        <div className="relative text-[12px] py-3  flex  items-center shadow-header fixed w-full bg-white z-40 sm:py-4  md:py-2 xl:px-6 xl:py-3  ">
        
         
 {/* Menu Icon */}
    <div className="flex flex-col gap-1 px-4 cursor-pointer md:hidden xl:px-4"  onClick={handleManubar}>
      <div className="w-[18px] h-[2px] rounded-full  bg-black"></div>
      <div className="w-[18px] h-[2px] rounded-full   bg-black"></div>
      <div className="w-[18px] h-[2px] rounded-full bg-black"></div>
    </div> 
    
 {/* Logo and Brand */}
     <div className="flex gap-2 items-center grow xl:gap-4">
        <Link href='/'>
        <img src="./icon/logo.svg" className="w-[29px] h-[29px] md:w-[50px] xl:w-[50px] xl:h-[50px]" alt="department of shipping" />
        
        {/* Department of shipping */}
        </Link><Link href='/'>
            <h2 className="text-black font-inter font-bold text-[12px] sm:text-[14px]  md:text-[16px] xl:text-[25px] 2xl:text-[30px]"> 
              Department of Shipping
            </h2></Link>
    </div>
    
  {/* info */}
    <div className="flex jistify-between items-center gap-x-4  xl:gap-x-16 md:flex">
     <div className="hidden  gap-x-2   p-2 md:flex md:justify-center md:items-center">
      <img src="./icon/contact.svg" className="w-[29px] h-[29px]  md:h-[30px] md:w-[30px] xl:w-[50px] xl:h-[50px]" alt="" />
      {/* <div className="flex flex-col justify-center  font-[400]  leading-[34px] shrink">
      <div className="flex text-black font-inter text-sm font-normal leading-34 gap-x-2 xl:text-[16px]">Call : <div className="text-black font-inter text-sm font-bold font-bold justify-self-auto font-inter  flex items-center leading-34 xl:text-[20px]">09223455 </div> </div>
      <div className="flex text-black font-inter text-sm font-normal leading-34 gap-x-2 xl:text-[16px]">Mail : <div className="text-black font-inter text-sm font-bold font-bold  leading-34 font-inter flex items-center xl:text-[20px]"> info@dosinlandcrew.com</div> </div>
      </div> */}

      <table className="table table-auto border-separate border-spacing-y-">
        <tbody className="space-y-2">
           
        <tr className="p-2 ">
          <td>
             <div className="flex text-black  font-inter text-sm font-normal leading-34 gap-x-2 md:text-[11px] xl:text-[13px]">Call</div>
          </td>
          <td className="px-1">: </td>
         <td>
         <div className="text-black  text-sm font-bold  leading-34 font-inter md:text-[10px] xl:text-[13px]"> 01576400104, 01576400105</div>
         </td>
           </tr>

           <tr className="p-2">
          <td>
             <div className="flex text-black  font-inter text-sm font-normal  md:text-[11px] lg:text-sm  gap-x-2 xl:text-[13px] ">Mail</div>
          </td>
          <td className="px-1">:</td>
         <td>
         <div className="text-black  text-sm font-bold  leading-34 font-inter md:text-[11px] lg:text-sm xl:  xl:text-[13px] "> dos.support@dream71.com</div>
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
     <p className="text-black text-center font-inter text-[9px] font-bold font-inter leading-normal sm:text-[11px] md:text-[12px] xl:text-[15px]">Login</p>
     <img src="./icon/usericon.svg"  className ='w-[29px] h-[29px] md:w-[30px] xl:w-[50px] xl:h-[50px] 2xl:w-[30px] 2xl:' alt="" />
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