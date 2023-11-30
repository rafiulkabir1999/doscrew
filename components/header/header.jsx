import Link from "next/link"
import MobileMenu from './mobilemenu'
export default function Header(){
    return(
        <div className="relative px-4 py-2 flex  items-center shadow-header fixed w-full bg-white z-40 xl:px-6  ">
         
         {/* Nav Bar for Mobile view */}
         <div className="absolute h-[100vh] left-0 top-10 w-[90%] z-0 r-0">
           <MobileMenu />
         </div>
         
              {/* Menu Icon */}
          <div className="flex flex-col gap-1 px-4 cursor-pointer md:hidden">
            <div className="w-[18px] h-[2px] rounded-full  bg-black"></div>
            <div className="w-[18px] h-[2px] rounded-full   bg-black"></div>
            <div className="w-[18px] h-[2px] rounded-full bg-black"></div>
          </div> 
          
       {/* Logo and Brand */}
           <div className="flex gap-x-4 items-center grow ">
         <Link href='/'>
         <img src="./icon/logo.svg" className="w-[55px]" alt="department of shipping" />
         </Link>
          <h2 className="text-black font-inter text-30.557 font-bold">
            <Link href='/'>
              Department of Shipping
            </Link>
            </h2>
          </div>
          
          {/* info */}
          <div className="flex jistify-between items-center  xl:gap-x-12 md:flex">
           <div className="hidden  gap-x-4 md:flex">
            <img src="./icon/contact.svg" className="w-[55px]  xl:w-[50px]" alt="" />
            <div className="flex flex-col justify-center item-center font-[400]  leading-[34px] shrink">
            <p className="flex text-black font-inter text-20 font-normal leading-34 gap-x-2 xl:text-[20px]">Call : <span className="text-black font-inter text-[15px] font-bold leading-34 xl:text-[20px]">09223455 </span> </p>
            <p className="flex text-black font-inter text-20 font-normal leading-34 gap-x-2 xl:text-[20px]">Mail : <span className="text-black font-inter text-[15px] font-bold leading-34 xl:text-[20px]"> info@dosinlandcrew.com</span> </p>
            </div>
           </div>
           <span className="hidden md:block">
            <img src="./icon/devidericon.svg" className="" alt="" />
           </span>

         {/* Login  */}
           <div className="flex items-center gap-4">
           <p className="text-black text-center font-inter text-20 font-bold leading-normal">Login</p>
           <img src="./icon/usericon.svg"  className ='w-[55px]' alt="" />
           </div>
          </div>

         
        </div>
    )
}