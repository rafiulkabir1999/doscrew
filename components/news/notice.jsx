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
    }]

    return(
        <div className="flex flex-col   shadow-noticeboard rounded h-full ">
            <div className="flex p-2 items-center gap-3">
                <spam className='text-[55px] text-[#262161] p-2'><GiNotebook/></spam>
               <h2 className="text-[30px] text-[#262161] leading-[34px] font-[700]">Notice</h2>
            </div>

            { NoticeList.map( list => {
            return <div className=" px-6 m-1 mt-3 min-h-[105px] ">
            <div className="rounded shadow-noticeboard flex flex-col gap-4 p-2 bg-[#F6F6F6] px-8 pt-5 pb-2 shadow-inner shadow-md w-full border-[.5px rgba(0,0,0,0.50)]">
             <p className="text-baseliteblue text-[25px] font-[700] leading-[24px] shortlink">{list.notice}</p>
             <span className="text-[#000] leading-[16px] text-[14.94px] font-[400]">
             {list.date}
             </span>
            </div>
           </div>
           })}

        </div>
    )
}