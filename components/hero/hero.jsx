import Button from '../heroButton/heroButton.jsx'
import Link from 'next/link'
export default function Hero(){



    return(
      
          

       <div className=" p-4 bg-bg_image grid grid-row-1   obj-cover px-8  bg-cover bg-no-repeat bg-center items-center  xl:px-16     h-screen md:grid-cols-2 md:gap-x-8 md:h-[80vh] md:flex-row 
       xl:grid-cols-5 xl:gap-6 xl:p-10">
         
             <div className="flex flex-col gap-10  pt-30  md:pt-0 md:gap-5 xl:col-span-2 xl:pt-0  ">
               <p className='text-white  text-[44px] font-bold leading-[44px]   xl:text-[34px] xl:leading-[34px] xlmax-w-[500px] xl:font-bold xl:pr-16 xl:leading-[44px] 2xl:leading-[53px] '>Inland Crew Management System</p>
               <p className='text-white leading-[26px] text-[17px] font-normal  md:text-[20px]  md:leading-[30px] xl:pr-16 xl:text-[25px]  xl:font-[300]  xl:text[19px] xl:leading-[40px]  2xl:leading-[46px]'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div> 

            <div className=" overflow-hidden col-span-3 px-4  ">
              <Button/>
             
            </div> 

            
        </div>


    )
}