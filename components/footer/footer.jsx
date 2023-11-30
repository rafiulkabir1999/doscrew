export default function Footer() {
    return(
        <div className="flex  flex-col items-center justify-between px-10 py-3 bg-footer md:flex-row">
            <div>
                <p className="text-[#0F0F0F] text-[10px] font-[400] p-2 Md:text-[20px]  ">Copyright @2023 , DoS , All Right Reserved</p>
            </div>
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
                    <p className="text-[#0F0F0F] font-[400] text-[10px] md:text-[20px] md:font-[400] ">Design & Developement By</p> 
                    <img className="max-w-[140pxs] h-[44px] max-w-[100px] md:max-w-[141px]" src="./Dream71_logo.png" alt="" />

            </div>
        </div>
    )
}