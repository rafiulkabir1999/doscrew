
import ButtonheroSection from "../../components/layout/buttonherosection";

export default function heroButton(){

  const ButtonList = [
    {
      name:'Apply for ICN',
      color:"bg-[#F1D1D0]",
      link:'/register'
    },{
      name:"Certificate Verification",
      color:"bg-[#F0ECE3]",
      link:"/register",
    },{
      name:"Training Center",
      color:"bg-[#F0ECE3]",
      link:"/register"

    },{
      name:"Survey Operators",
      color:"bg-[#E0DEF4]",
      link:"/register"
    }
  ]
    return(

      <div className="grid  grid-cols-2  gap-y-3 gap-x-4 md:gap-x-10   md:pt-0  xl:pt-0 xl:p-2">      
    {
             ButtonList.map ( list => {
              return <div key={list.name}>
                <ButtonheroSection details = {list} />
              </div>
             })
          }
      

</div>
       
    )
}