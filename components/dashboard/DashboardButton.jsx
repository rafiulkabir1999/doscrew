export default function DashboardButton(){
   
   const FourDiv = [{
    name:"Total Applications",
    value:"00",
    color:"bg-[#4674C2]"
   },
   {
    name:"Sea Service",
    value:"000",
    color:"bg-[#FFD3B4]"
  },
  {
        name:"Total Exam",
        value:"00",
        color:"bg-[#98DDCA]"
    },
    {
        name:"Achieve Cirtificates",
        value:"00",
        color:"bg-[#E0DEF4]"
    }
   
 ]
    return(
        <div className="flex gap-x-4">
            {
            FourDiv.map( list => {
                return <div className={`flex-1  px-6 py-2 flex flex-col min-h-[100px] text-flex items-center justify-center rounded-md shadow-buttonborder gap-2 ${list.color}`}>
                    <p>{list.name}</p>
                    <p className="font-[700] xl:text-[35px]">{list.value}</p>
                </div>
            })
            }

        </div>
    )
}