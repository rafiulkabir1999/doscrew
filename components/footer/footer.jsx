export default function Footer() {
    return(
        <div className="flex items-center justify-between px-10 py-3 bg-footer">
            <div>
                <p className="text-[#0F0F0F] font-[400] text-[20px] ">Copyright @2023 , DoS , All Right Reserved</p>
            </div>
            <div className="flex  items-center gap-2">
                    <p className="text-[#0F0F0F] font-[400] text-[20px] ">Design & Developement By</p> 
                    <img className="max-w-[140pxs] h-[44px]" src="./Dream71_logo.png" alt="" />

            </div>
        </div>
    )
}