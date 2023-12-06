import Link from 'next/link'
export default function Buttonherosection (props) {
    return(
       <div>
         <Link href={props?.details?.link}>
        <div className={`${props.details.color}  p-0 py-1  flex items-center border-gray-400 border border-baseblue justify-between rounded-[1.9px] cursor-pointer   md:gap-0   rounded-md border border-blue-500 md:p-6 px-2 md:py-5 xl:p-5  hover:bg-green-200 `}>
        <p className=" font-[700] text-[9px] font-bold text-baseblue md:text-[15px] md:p-0 md:leading-[20px] xl:leading-[30.26px] font-inter xl:font-bold xl:shrink-0 xl:text-[20px]">{props && props.details.name}</p>
        <span className="flex items-center text-baseblue text-4xl p-2 opacity-50 text-2xl xl:text-4xl ">
          <img src="./icon/buttonarrowRight.svg" className="w-[25px]" alt="" />
        </span>
        </div>  
        </Link>
       </div>
    )
}