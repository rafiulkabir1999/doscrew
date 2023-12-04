import Notice from './notice'
import Card from './card'
import Link from 'next/link'
import Modalnotification from '../layout/Modalnotification'

export default function News(){

   const CardList = [{
      name:"Manual",
      path:'./icon/manualicon.svg',
      image:'bg-card1'
   },
   {
      name:"Tutorials",
      path:'./icon/tutorialicon.svg',
      image:'bg-card2'
   },


]
  
    return(
        <div className="relative flex flex-col bg-noticebackground ">
            <div className="relative overflow-hidden flex items-center  p-4  ">
              <div className='absolute top-[-60px] left-[-130px] w-[300px] rotate-[-60deg] h-[200px] bg-[#F1D1D0] z-20 '></div>
              <div className='absolute w-full h-[91px] bg-[#E0DEF4]'></div>
              <p className='relative text-black font-inter text-25 font-bold leading-normal z-40 px-8 '>News</p>
             </div>

             <div className="flex  flex-col py-10 px-2 gap-10 justify-between md:px-10 md:py-10 md:flex-row">
             <div className=" gap-4 bg-white grow">
               <div className="flex flex-col   shadow-noticeboard rounded h-full ">
                  {/* Notice Header */}
                <div className="flex p-2 items-center gap-3">
                <img src='./icon/noticeicon.svg' className='text-[#262161] w-55 h-64.474 flex-shrink-0 p-2'></img>
               {/* Notice Link */}
               <Link href='/notice'>
               <h2 className="text-[30px] text-[#262161] leading-[34px] font-[700]">Notice</h2>
               </Link>
               </div>

                  <Notice />
                  </div>
                </div>
                <div className=' flex flex-col  gap-y-4'>
                  { CardList.map( item => {
                     return <Card details = {item} />
                  })}
                </div>
             </div>

             <Modalnotification />
        </div>
    )
}