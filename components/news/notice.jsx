'use client'
import { useParams } from "next/navigation"
export default function Notice ({width , borderspaching ,border}){

    //custom list of notice
    const NoticeList = [{
        notice:'Lorem Ipsum is simply dummy text of the printing and typesetting ...',
        date:' DD/MM/YYYY, 00:00'
    },
    {
        notice:'Lorem Ipsum is simply dummy text of the printing and typesetting ...',
        date:' DD/MM/YYYY, 00:00'
    },
    {
        notice:'Lorem Ipsum is simply dummy text of the printing and typesetting ...',
        date:' DD/MM/YYYY, 00:00'
    },
    {
        notice:'Lorem Ipsum is simply dummy text of the printing and typesetting ...',
        date:' DD/MM/YYYY, 00:00'
    },
    {
        notice:'Lorem Ipsum is simply dummy text of the printing and typesetting ...',
        date:' DD/MM/YYYY, 00:00'
    }]
   const url = useParams();
   console.log(url)
   // Dinamic Color generator
    const bgnotice = (index) => {
        if(index % 2 == 0){
            console.log("true")
            return "bg-gray-100"
        }

         else return  "bg-gray-50"
        
    }
    return(
       <>
    

            <table class={`${width}   ${borderspaching} ${border} px-2  xl:mx-5 `}>
                <tbody className="">
               
                    
                    {NoticeList.map ((list ,index) => {
                        return  <tr className={`border-gray-400 border ${border}`}>
                        <td className="border ">
                            <div className=" " key={index}>
                        <div className={`${ bgnotice(index)}   flex flex-col gap-3   p-2 bg-[#F6F6F6] md:px-4 md:pt-6   w-full   md:px-8 md:pt-5 xl:px-6 xl:pt-3`} >
                         <p className="text-baseliteblue text-[15px] font-[700] leading-[16px]   xl:text-[19px] 2xl:[25px]">{list.notice }</p>
                         <span className="text-[#000] leading-[16px] text-[14.94px] font-[400] xl:pb-1 xl:text-[12px]">
                         {list.date}
                         </span>
                        </div>
                       </div>
                   </td>
                    </tr>
                 })}
                    
               
                
                </tbody>
            </table>
       
        </>
    )
}