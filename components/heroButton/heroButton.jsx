import { FaArrowRight } from "react-icons/fa6";

export default function heroButton(props){
    return(
        <div className={`p-4 bg-${props.details.color}  flex items-center border-gray-400 border border-baseblue shrink-0 justify-between rounded border cursor-pointer md:gap-0   md:max-w-[280px]  md:h-[80px] xl:w-[403px]  xl:h-[101px] border-gray-600   hover:bg-green-200 `}>
          <p className="pl-2   text-baseblue md:text-[20px] md:p-0 md:leading-[20px] xl:leading-[30.26px]">{props.details.name}</p>
          <span className="flex items-center text-baseblue text-4xl p-2 opacity-50 text-2xl xl:text-4xl ">
            <FaArrowRight/>
          </span>
        </div>
    )
}