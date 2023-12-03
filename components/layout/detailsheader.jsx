import Link from 'next/link'
export default function detailsheader (props) {
    return(
        <div className="bg-bg_image obj-fit max-h-[180px] bg-cover cleanFix" >
        <div className="px-10 flex items-center h-full   justify-center max-h-[180px] opacity-10 bg-gradient-to-r from-blue-500 via-blue-500 to-transparent  h-screen">
     
        </div>

        <div className="absolute top-[40%] bottom-[50%] left-10  flex justify-between text-[30px] font-[700] leading-[36px] w-[50%]">
        <Link href='/'>
        <img src="./icon/arrowleft.svg" className=" left-20 opacity-100  " alt="" />
        </Link>
        <p className="opacity-100 relative z-50 text-center text-white text-center font-inter text-30 font-normal font-bold leading-normal translate-x-1/2 ">{props.details}</p>
        </div>

      </div>
    )
}