import Button from '../heroButton/heroButton.jsx'
import Link from 'next/link'
export default function Hero(){



    return(
      
          

       <div className=" bg-bg_image flex flex-col   obj-cover gap-10 pt-[40px]  bg-cover bg-no-repeat bg-center items-center md:px-8 md:p-4 xl:px-16 h-[55vh] md:gap-0 md:flex  xl:gap-x-8 md:bg-yellow-400 md:h-[60vh] lg:h-[60vh] md:flex-row md:gap-10
       xl:h-[80vh] xl:grid-cols-5 xl:gap-10 xl:p-10 2xl:h-[80vh]">
         
             <div className="flex flex-col gap-5 px-8   pt-30 sm:mx-[20px] md:mx-0 md:px-0 md:pt-0 md:gap-1  xl:pt-0  ">
               <p className='text-white  text-[25px]  font-bold   md:leading-[25px] md:text-[20px]  lg:text-[25px] xl:font-bold  xl:text-[34px] xl:p-2 2xl:text-[44px]  xl:leading-[43px] 2xl:leading-[53px]'>Inland Crew <br className=''/> Management System</p>
               <p className='text-white leading-[26px]  text-[17px] font-normal  md:text-[12px]   md:leading-[18px] lg:text[20px] lg:mr-[20px] xl:pr-16 xl:text-[25px] xl:p-2 xl:font-[300]  xl:text[19px] xl:leading-[40px]  2xl:leading-[46px]'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div> 

            <div className=" overflow-hidden col-span-3 w-[90%] col-span-2 sm:w-[60%] md:pl-4 xl:px-0 md:cal-span-4 md:w-[80%] lg:w-[65%] xl:w-[95%] 2xl:w-[70%] xl:mx-auto">
              <Button/>
             
            </div> 

            
        </div>


    )
}