import { FaArrowRight } from "react-icons/fa6";
import ButtonheroSection from "../../components/layout/buttonherosection";

export default function heroButton(){

  const ButtonList = [
    {
      name:'Apply for ICN',
      color:"bg-[#F1D1D0]"
    },{
      name:"Cirtificatate Verification",
      color:"bg-[#F0ECE3]"
    },{
      name:"Training Center",
      color:"bg-[#F0ECE3]",

    },{
      name:"Survey Operators",
      color:"bg-[#E0DEF4]"
    }
  ]
    return(

      <div className="grid  grid-cols-2  gap-y-5 gap-x-8 gap-x-2 md:pt-16 md:grid-cols-2 md:pt-0 md:gap-x-8">      
    {
             ButtonList.map ( list => {
              return <ButtonheroSection details = {list} />
             })
          }
      

</div>
       
    )
}