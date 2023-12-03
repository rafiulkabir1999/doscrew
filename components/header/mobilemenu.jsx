export default function Mobilemenu () {
    return(
       
            <div className="w-[100vw] relative z-100   block   overflow-y-scroll bg-transparentBlack">
                <div className=" w-[90vw] flex flex-col  justify-between bg-white opacity-100 h-[100vh] p-6">
                 
                    <div className="space-y-2" >
                        <div className="bg-gray-400 min-h-[50px] rounded">
                            <p></p>
                        </div>
                        <div className="bg-gray-400 min-h-[50px] rounded">
                            <p></p>
                        </div>
                        <div className="bg-gray-400 min-h-[50px] rounded">
                            <p></p>
                        </div>
                        <div className="bg-gray-400 min-h-[50px] rounded">
                            <p></p>
                        </div>
                    </div>

                        <div className="flex jistify-between items-center mt-auto  xl:gap-x-12 md:flex">
                            <div className="gap-x-4 flex">
                            <img src="./icon/contact.svg" className="w-[55px]  xl:w-[50px]" alt="" />
                            <div className="flex flex-col justify-center item-center font-[400]  leading-[34px] shrink">
                            <p className="flex text-black font-inter text-20 font-normal leading-34 gap-x-2 xl:text-[20px]">Call : <span className="text-black font-inter text-[15px] font-bold leading-34 xl:text-[20px]">09223455 </span> </p>
                            <p className="flex text-black font-inter text-20 font-normal leading-34 gap-x-2 xl:text-[20px]">Mail : <span className="text-black font-inter text-[15px] font-bold leading-34 xl:text-[20px]"> info@dosinlandcrew.com</span> </p>
                            </div>
                            </div>
                            <span className="hidden md:block">
                            <img src="./icon/devidericon.svg" className="" alt="" />
                            </span>
                        </div>
                </div>
                
  
            </div>
        
    )
}