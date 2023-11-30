import Notice from "@/components/news/notice"
import Link from 'next/link'
import DetailsHeader from '../../components/layout/detailsheader'
import ArrowButton from "@/components/layout/arrowButton"
export default function Details(){
    
    return(
        <div className="pt-[87px]  pb-20 ">
           
           {/* Cover area of details page @ /notice @/manual @/toutorial */}
        <DetailsHeader details="tutorials" />


           <div className=" px-10 py-7 bg-noticebackground ">
              <Notice/>
              
              <div className="px-5 py-2">
              <ArrowButton />
              </div>
           </div>

         


        </div>
    )
}