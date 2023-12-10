import Notice from './notice'
import Card from './card'
import Link from 'next/link'
import Modalnotification from '../layout/Modalnotification'

export default function News(){

   const CardList = [{
      name:"Manuals",
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

         {/* News HeadLine */}
            <div className="relative overflow-hidden flex items-center  p-4 bg-purple-100 shadow-md xl:h-[70px] 2xl:h-[91px] ">
              <div className='absolute top-[-60px] left-[-130px] w-[300px] rotate-[-60deg] h-[200px] bg-[#F1D1D0] z-20 2xl:left-[-80px] '></div>
              <div className='absolute w-full h-[91px] bg-[#E0DEF4]'></div>
              <p className='relative text-black   font-bold z-40 px-8 font-inter xl:text-[20px] 2xl:text-[25px]'>News</p>
             </div>

             <div className="flex  flex-col py-10 px-2 gap-10 justify-between md:gap-4 md:px-4 xl:px-10 md:py-10 md:flex-row xl:mx-8">
             <div className=" gap-4 bg-white grow">
             <div className="flex flex-col   shadow-noticeboard  h-full w-auto ">
                 
               {/* Notice Header */}
                <div className="flex  items-center gap-3">
                <img src='./icon/noticeicon.svg' className='text-[#262161] p-1 ml-4 my-4 xl:w-[50px] xl:h-[60px] 2xl:w-[55px] 2xl:h-[64.474px] '></img>
               
               {/* Notice Link */}
               <Link href='/notice'>
               <h2 className=" text-[#262161] leading-[34px] font-[700]  xl:text-[25px] 2xl:text-[30px]">Notice</h2>
               </Link>

               </div>
                  <Notice width='w-auto' borderspaching={"border-spaching-0"} border="" />
               </div>
                </div>

                <div className=' flex flex-col  gap-y-4'>
                  { CardList.map( (item, indx) => {
                     return <Card key={indx} details = {item} />
                  })}
                </div>     

                
             

             </div>

             <Modalnotification />
        </div>
    )
}