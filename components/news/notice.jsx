

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
            { NoticeList.map( (list,index) => {
            return <div className=" px-2   md:px-6   ">
            <div className={`${ bgnotice(index)}   flex flex-col gap-5 p-2 bg-[#F6F6F6] px-4 pt-6 pb-4 shadow-inner shadow-md w-full border-[.5px rgba(0,0,0,0.50)] border-gray-200 md:px-8 md:pt-5`} >
             <p className="text-baseliteblue text-[20px] font-[700] leading-[25px]">{list.notice }</p>
             <span className="text-[#000] leading-[16px] text-[14.94px] font-[400]">
             {list.date}
             </span>
            </div>
           </div>
           })}
       
        </>
    )
}