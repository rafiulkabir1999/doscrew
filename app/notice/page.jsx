import Notice from "@/components/news/notice"
import { useParams } from "next/navigation"
import DetailsHeader from "@/components/layout/detailsheader"
import Link from 'next/link'
import ArrowButton from '../../components/layout/arrowButton'
export default function Details(){
    
    return(
        <div className="   ">
          <DetailsHeader details="Notice" />

           <div className="block px-1 py-7 bg-noticebackground pb-20 md:px-10 md:py-7">
              <Notice/>
              
            <div className="px-5 py-2">
              <ArrowButton />
              </div>
           </div>

         


        </div>
    )
}