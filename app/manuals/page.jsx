import Link from 'next/link'
import Notice from '../../components/news/notice'
import DetailsHeader from '@/components/layout/detailsheader'
export default function Manual(){

    return(
        <div className="">
            <DetailsHeader details="Manual" />

           <div className="w-full px-10 py-7 bg-noticebackground ">
           <Notice width = 'w-full' borderspaching=" border-spacing-2 " border="border-separate" />
              
           <div className="flex items-center justify-end m-2   gap-2">
             <img src="./icon/pagearrowleft.svg" className="w-18.67 h-34.66" alt="" />
             <p className="text-[25px] font-inter font-[400]">1 of 3</p>
             <img src="./icon/pagearrowright.svg" alt="" />
           </div>
           </div>

         


        </div>)
}