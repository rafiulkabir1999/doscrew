'use client'

export default function Notice (props){

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


    const bgnotice = (index) => {
        if(index % 2 == 0){
            console.log("true")
            return "bg-gray-100"
        }

         else return  "bg-gray-50"
        
    }
    return(
       <>
            {/* { NoticeList.map( (list,index) => {
            return <div className=" px-2   md:px-6   ">
            <div className={`${ bgnotice(index)}   flex flex-col gap-5 p-2 bg-[#F6F6F6] px-4 pt-6 pb-4 shadow-inner shadow-md w-full border-[.5px rgba(0,0,0,0.50)] border-gray-200 md:px-8 md:pt-5`} >
             <p className="text-baseliteblue text-[20px] font-[700] leading-[25px]">{list.notice }</p>
             <span className="text-[#000] leading-[16px] text-[14.94px] font-[400]">
             {list.date}
             </span>
            </div>
           </div>
           })} */}

            <table class=" table-auto  border-collapse px-2  xl:mx-5 ">
                <tbody className="">
               
                    
                    {NoticeList.map ((list ,index) => {
                        return  <tr className="border border-gray-400">
                        <td className="">
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