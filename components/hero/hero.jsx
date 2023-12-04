import Button from '../heroButton/heroButton.jsx'
import Link from 'next/link'
export default function Hero(){



    return(
        <div className=" p-4 bg-bg_image grid grid-row-1 pt-20 p-16 obj-cover px-8  bg-cover bg-no-repeat bg-center items-center  xl:px-16  pt-16 gap-y-5 gap-x-8 gap-x-2 h-screen md:grid-cols-2 md:gap-x-8 md:h-[80vh] md:flex-row">
            <div className="flex flex-col gap-10 flex-.5 pt-30  md:pt-0 md:gap-5  ">
               <p className='text-white  text-[44px] font-bold leading-[44px]   xl:text-[44px]  xl:max-w-[500px] xl:font-bold xl:leading-[53px]'>Inland Crew Management System</p>
               <p className='text-white leading-[26px] text-[17px] font-normal  md:text-[20px] xl:max-w-[490px] md:leading-[30px] xl:text-[30px]  xl:font-[400]  xl:leading-[46px] '>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="flex-1 overflow-hidden  ">
              <Button/>
             
            </div>
        </div>
    )
}