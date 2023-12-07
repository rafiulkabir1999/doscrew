export default function Footer() {
    return(
        <div className="flex shadow-footer flex-col items-center shadow-footer justify-between px-10 py-10 gap-2 md:py-0 md:gap-0 p-1 bg-footer md:flex-row xl:px-[64px]">
            <div>
                <p className="text-[#0F0F0F] text-[10px] font-semibold font-inter xl:text-[15px] 2xl:text-[20px] ">Copyright @2023 , DoS , All Right Reserved</p>
            </div>
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
                    <p className="text-[#0F0F0F] font-inter font-medium text-[10px] md:text-[12px]  xl:text-[15px] ">Design & Developement By</p> 
                    <img className="max-w-[140pxs] xl:h-[30px] xl:mb-2 xl:w-[90px] 2xl:max-w-[141px] " src="./Dream71_logo.png" alt="" />

            </div>
        </div>
    )
}