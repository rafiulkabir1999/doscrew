import Link from 'next/link'
export default function Buttonherosection (props) {
    return(
       <div>
         <Link href={props?.details?.link}>
<<<<<<< HEAD
        <div className={`${props.details.color}  p-0 py-1  flex items-center border border-blue-600 justify-between rounded-[1.9px] cursor-pointer   md:gap-0   md:rounded-md  md:p-2 px-2 md:py lg:p-4 xl:p-6  hover:bg-green-200 `}>
        <p className=" font-[700] text-[9px] font-bold text-baseblue md:text-[12px] md:p-0 md:leading-[20px] xl:leading-[30.26px] font-inter xl:font-bold xl:shrink-0 xl:text-[20px] 2xl:text-[25px]">{props && props.details.name}</p>
=======
        <div className={`${props.details.color}  p-0 py-1  flex items-center border-gray-400 border border-blue-600 justify-between rounded-[1.9px] cursor-pointer   md:gap-0   md:rounded-md  md:p-2 px-2 md:py lg:p-4 xl:p-6  hover:bg-green-500 `}>
        <p className=" font-[700] text-[9px] font-bold text-baseblue md:text-[12px] md:p-0 md:leading-[20px] xl:leading-[30.26px] font-inter xl:font-bold xl:shrink-0 xl:text-[20px] 2xl-[30px]">{props && props.details.name}</p>
>>>>>>> 430f3a58ac7e567ce92d578cdaca879a96177b78
        <span className="flex items-center text-baseblue text-4xl p-2 opacity-50 text-2xl xl:text-4xl ">
          <img src="./icon/buttonarrowRight.svg" className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] xl:w-[25px] 2xl:w-[27px] 2xl:h-[27px] " alt="" />
        </span>
        </div>  
        </Link>
       </div>
    )
}