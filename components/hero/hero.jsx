import Button from '../heroButton/heroButton.jsx'
import Link from 'next/link'
export default function Hero(){



    return(
        <div className=" bg-bg_image flex flex-col p-16 obj-cover px-8  bg-cover bg-no-repeat bg-center items-center  xl:px-16  pt-16 gap-y-5 gap-x-8 gap-x-2 h-screen md:grid-cols-2 md:gap-x-8 md:h-[80vh] md:flex-row">
            <div className="flex flex-col gap-10 flex-1 pt-40 md:pt-0 md:gap-5  xl:min-w-[535px]">
               <p className='text-white min-w-[90%] text-[44px] leading-[44px] md:min-w-[250px]  xl:text-[44px]  xl:max-w-[500px] xl:font-700 xl:leading-[53px]'>Inland Crew Management System</p>
               <p className='text-white leading-[26px] text-[17px] font-[400]  md:text-[30px] xl:max-w-[490px] md:leading-[30px] xl:text-[30px]  xl:font-[400]  xl:leading-[46px] '>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="flex-1 overflow-hidden max-w-[600px]">
              <Button/>
             
            </div>
        </div>
    )
}