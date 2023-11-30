import { GiNotebook } from "react-icons/gi";

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

    return(
       <>
            { NoticeList.map( list => {
            return <div className=" px-6  m-2  ">
            <div className="rounded shadow-noticeboard flex flex-col gap-4 p-2 bg-[#F6F6F6] px-8 pt-5 pb-2 shadow-inner shadow-md w-full border-[.5px rgba(0,0,0,0.50)] border-gray-200">
             <p className="text-baseliteblue text-[20px] font-[700] leading-[25px]">{list.notice}</p>
             <span className="text-[#000] leading-[16px] text-[14.94px] font-[400]">
             {list.date}
             </span>
            </div>
           </div>
           })}
       
        </>
    )
}