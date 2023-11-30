
export default function Buttonherosection (props) {
    return(
        <>
        <div className={`${props.details.color}  p-0 py-2  flex items-center border-gray-400 border border-baseblue shrink-0 justify-between rounded border cursor-pointer   md:gap-0   rounded-md border border-blue-500 md:p-6 px-2 md:py-5  hover:bg-green-200 xl:p-`}>
        <p className="pl-2 font-[700] text-[9px] font-[700] text-baseblue md:text-[15px] md:p-0 md:leading-[20px] xl:leading-[30.26px] font-inter">{props && props.details.name}</p>
        <span className="flex items-center text-baseblue text-4xl p-2 opacity-50 text-2xl xl:text-4xl ">
          <img src="./icon/buttonarrowRight.svg" className="w-[25px]" alt="" />
        </span>
        </div>  
        </>
    )
}