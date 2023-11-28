//import UserLogin from '../../components/login'
export default function UserLogin(){
    return(
      <div className=" bg-bg_image h-screen flex flex-col p-6 rounded shadow-noticeboard flex flex-col gap-y-10 text-white items-center ">
       <div className="min-w-[570px]">
       <h2 className="text-[30px] font-[700] pb-10 flex items-center justify-center ">Login</h2>
       
       <div className="bg-[#F0ECE3] rounded p-10 flex flex-col gap-4 ">

       <div className="flex justify-between p-3 bg-white login-border rounded gap-4">
         <img  className="" src="./icon/personicon.svg"  alt="" />
         <input className="outline-none text-[20px] grow font-[400] text-inputplaceholde text-baseblue " type="text"placeholder="User ID/CNC/TC" />
      </div>

      <div className="flex justify-between p-3 bg-white login-border rounded border-loginborder border-solid ">
        <div className="flex justiy-between  gap-4">
        <img  className="" src="./icon/lockicon.svg"  alt="" />
         <input className="outline-none text-[20px] font-[400] text-inputplaceholde text-baseblue" type="password"placeholder="password" />
        </div>
         <img className="cursor-pointer hover:text-gray-500 " src="./icon/oneeyeicon.svg" alt="" />
      </div>

      <p className="text-baseliteblue text-[20px] text-[400] text-right cursor-pointer hover:text-baseblue">Forget PassWord ?</p>

        
        <div className="flex justify-between pt-6">
          <div className="flex justify-between">
             <span className="bg-gray-500 w-8 h-8 rounded shadow-buttonborder cursor-pointer"></span>
             <p className="font-[400] text-[20px] text-black px-3 ">Remember me</p>
          </div>
          <div>
            <button className=" bg-baseblue p-4 font-[700] text-[25px] px-20 rounded">
              Login
            </button>
          </div>

        </div>
  
       </div>

       <button className="w-full bg-submitbutton rounded mt-10 p-3"> 
         Apply For ICN
       </button>

       </div>
  </div>
    )
}