import Notice from './notice'
import Card from './card'

export default function News(){

   const CardList = [{
      name:"Manual",
      path:'./public/icon/manualicon.svg'
   },
   {
      name:"Tutorials",
      path:'./public/icon/toturials.svg'
   },


]
  
    return(
        <div className="flex flex-col ">
             <div className="relative overflow-hidden ">
                
                <div className=" ">
                  <p className='p-3 font-bold text-[25px]  bg-[#E0DEF4] relative z-20  md:px-10'>News</p>
                </div>
                <div className=" absolute  bg-[#F1D1D0] rotate-45 h-[200px] w-[200px]  top-[-100px] left-[-20px] z-10 overflow-hidden"></div>
             </div>
             <div className="flex  flex-col py-10 px-10 gap-10 justify-between md:flex-row">
                <div className=" gap-4 bg-white grow">
                
                  <Notice />
                  
                </div>
                <div className=' flex flex-col justify-between gap-y-6'>
                  { CardList.map( item => {
                     return <Card details = {item} />
                  })}
                </div>
             </div>
        </div>
    )
}