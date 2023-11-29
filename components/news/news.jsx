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
             <div className="relative overflow-hidden flex items-center  p-4  ">
              <div className='absolute top-[-60px] left-[-130px] w-[300px] rotate-[-60deg] h-[200px] bg-[#F1D1D0] z-20 '></div>
              <div className='absolute w-full h-[91px] bg-[#E0DEF4]'></div>
              <p className='relative text-black font-inter text-25 font-bold leading-normal z-40 px-8 '>News</p>
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