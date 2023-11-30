import Link from "next/link"
export default function Header(){
    return(
        <div className=" px-4 py-2 flex  items-center shadow-header fixed w-full bg-white z-50 xl:px-6  ">
          <div className="flex gap-x-4 items-center grow ">
         <Link href='/'>
         <img src="./icon/logo.svg" className="w-68.083 h-68.083 flex-shrink-0" alt="department of shipping" />
         </Link>
          <h2 className="text-black font-inter text-30.557 font-bold">
            <Link href='/'>
              Department of Shipping
            </Link>
            </h2>
          </div>
          
          <div className="hidden  items-center  xl:gap-x-12 md:flex">
           <div className="flex gap-x-4">
            <img src="./icon/contact.svg" className="w-68.083 h-68.083 flex-shrink-0" alt="" />
            <div className="flex flex-col justify-center item-center font-[400] text-xl leading-[34px] shrink">
            <p className="flex text-black font-inter text-20 font-normal leading-34 gap-x-2">Call : <span className="text-black font-inter text-20 font-bold leading-34">09223455 </span> </p>
            <p className="flex text-black font-inter text-20 font-normal leading-34 gap-x-2">Mail : <span className="text-black font-inter text-20 font-bold leading-34"> info@dosinlandcrew.com</span> </p>
            </div>
           </div>
           <span>
            <img src="./icon/devidericon.svg" alt="" />
           </span>

           <div className="flex items-center gap-4">
           <p className="text-black text-center font-inter text-20 font-bold leading-normal">Login</p>
           <img src="./icon/usericon.svg"  className ='w-68.083 h-68.083 flex-shrink-0' alt="" />
           </div>
          </div>

          <div className="flex  md:hidden">
            <img  className="p-2 w-[15px] h-[15px] text-baseblue"  src="./icon/menu.svg" alt="" /> 
          </div>
        </div>
    )
}