"use client"
export default function Modalnotification () {
 const handleModal = () => {
  const modal = document.getElementById("MODAL")
  modal.classList.toggle('hidden')

 }

    return(
        <div id='MODAL' className=" hidden absolute px-10  w-[100vw] h-[100vh] bg-transparentBlack py-10 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div className="relative w-[50vw] h-[80%] bg-white mx-auto rounded">
                 <div className="flex w-full">
                    <span className="w-15 h-10 font-[700] text-white p-4 text-left bg-red-400 ml-auto" onClick={handleModal}>x</span>
                 </div>
             </div>
        </div>
    )
}