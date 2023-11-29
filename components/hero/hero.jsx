import Button from '../heroButton/heroButton.jsx'
export default function Hero(){



    return(
        <div className=" bg-bg_image flex flex-col p-16 obj-cover px-4  bg-cover bg-no-repeat bg-center items-center  xl:px-16  pt-16 gap-y-5 gap-x-8 gap-x-2 md:grid-cols-2 md:gap-x-8 md:h-[80vh] md:flex-row">
            <div className="flex flex-col gap-5 flex-1 md:min-w-[0px] xl:min-w-[535px]">
               <p className='text-white text-[44px] leading-[44px]  xl:text-[44px]  xl:max-w-[500px] xl:font-700 xl:leading-[53px]'>Inland Crew Management System</p>
               <p className='text-white md:text-[30px] xl:max-w-[490px] md:leading-[30px] xl:text-[30px]  xl:font-[400]  xl:leading-[46px] '>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="flex-1 overflow-hidden max-w-[600px]">
              <Button/>
             
            </div>
        </div>
    )
}