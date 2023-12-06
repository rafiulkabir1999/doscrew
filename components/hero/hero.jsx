import Button from '../heroButton/heroButton.jsx'
import Link from 'next/link'
export default function Hero(){



    return(
      
          

       <div className=" bg-bg_image flex flex-col   obj-cover gap-10 pt-[40px]  bg-cover bg-no-repeat bg-center items-center md:px-8 md:p-4 xl:px-16 h-[55vh] md:gap-0 md:flex md: md:gap-x-8 md:bg-yellow-400 md:h-[80vh] md:flex-row 
       xl:grid-cols-5 xl:gap-6 xl:p-10">
         
             <div className="flex flex-col gap-5 px-8 pt-30 sm:mx-[20px] md:mx-0 md:px-0 md:pt-0 md:gap-5  xl:pt-0  ">
               <p className='text-white  text-[25px] px-2 font-bold  sm:px-16 md:px-10 xl:text-[44px]  xl:text-[34px]  xl:font-bold xl:pr-16 xl:leading-[44px] 2xl:leading-[53px] '>Inland Crew Management System</p>
               <p className='text-white leading-[26px] px-2 text-[17px] font-normal sm:px-16 md:text-[20px] md:px-4  md:leading-[30px] xl:pr-16 xl:text-[25px]  xl:font-[300]  xl:text[19px] xl:leading-[40px]  2xl:leading-[46px]'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div> 

            <div className=" overflow-hidden col-span-3 w-[90%] col-span-2 sm:w-[60%] md:px-4 md:cal-span-4 md:w-full  ">
              <Button/>
             
            </div> 

            
        </div>


    )
}