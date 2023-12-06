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

                        <div className=" ">
                            <div className="gap-x-4 flex">
                                <img src="./icon/contact.svg" className="w-[44px] h-[44px]" alt="" />
                            <div className="flex flex-col justify-center item-center font-[400] gap-y-2 ">
                                <p className="flex text-black font-inter text-[12px] font-normal  gap-x-2 ">Call : <span className="text-black font-inter text-[12px] font-bold ">01576400104, 01576400105 </span> </p>
                                <p className="flex text-black font-inter text-[12px] font-normal  gap-x-2 ">Mail : <span className="text-black font-inter text-[12px] font-bold ">dos.support@dream71.com</span> </p>
                            </div>
                            </div>
                            
                        </div>
                </div>
                
  
            </div>
        
    )
}