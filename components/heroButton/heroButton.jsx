import { FaArrowRight } from "react-icons/fa6";

export default function heroButton(){
    return(

      <div className="grid  grid-cols-1 pt-16 gap-y-5 gap-x-8 gap-x-2 md:grid-cols-2 md:pt-0 md:gap-x-8">      
         
          <div className={`p-4 bg-bone  flex items-center border-gray-400 border border-baseblue shrink-0 justify-between rounded border cursor-pointer w-full md:gap-0   rounded-md border border-blue-500 bg-d-9-d-9-d-9    hover:bg-green-200 `}>
          <p className="pl-2 font-[700]  text-baseblue md:text-[15px] md:p-0 md:leading-[20px] xl:leading-[30.26px] font-inter">Apply for ICN</p>
          <span className="flex items-center text-baseblue text-4xl p-2 opacity-50 text-2xl xl:text-4xl ">
            <FaArrowRight/>
          </span>
          </div>    

          <div className={`p-4 bg-[#F0ECE3]  flex items-center border-gray-400 border border-baseblue shrink-0 justify-between rounded border cursor-pointer w-full md:gap-0  rounded-md border border-blue-500 bg-d-9-d-9-d-9      hover:bg-green-200 `}>
          <p className="pl-2 font-[700]  text-baseblue md:text-[15px] md:p-0 md:leading-[20px] xl:leading-[30.26px] font-inter"> Cirtificatate Verification</p>
          <span className="flex items-center text-baseblue text-4xl p-2 opacity-50 text-2xl xl:text-4xl ">
            <FaArrowRight/>
          </span>
          </div>   
          <div className={`p-4 bg-bthree  flex items-center border-gray-400 border border-baseblue shrink-0 justify-between rounded border cursor-pointer w-full md:gap-0  rounded-md border border-blue-500 bg-d-9-d-9-d-9       hover:bg-green-200 `}>
          <p className="pl-2 font-[700]  text-baseblue md:text-[15px] md:p-0 md:leading-[20px] xl:leading-[30.26px] font-inter">Training Center </p>
          <span className="flex items-center text-baseblue text-4xl p-2 opacity-50 text-2xl xl:text-4xl ">
            <FaArrowRight/>
          </span>
          </div>   
          <div className={`p-4 bg-[#e0def4]  flex items-center border-gray-400 border border-baseblue shrink-0 justify-between rounded border cursor-pointer w-full md:gap-0  rounded-md border border-blue-500 bg-[#F0ECE3]        hover:bg-green-200 `}>
          <p className="pl-2 font-[700]  text-baseblue md:text-[15px] md:p-0 md:leading-[20px] xl:leading-[30.26px] font-inter">Survey Operators</p>
          <span className="flex items-center text-baseblue text-4xl p-2 opacity-50 text-2xl xl:text-4xl ">
            <FaArrowRight/>
          </span>
          </div>   
      

</div>
       
    )
}