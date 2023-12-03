export default function Register(){
    return(
        <div className=" bg-bg_image h-screen flex flex-col p-6 rounded shadow-noticeboard flex flex-col gap-y-10 text-white items-center ">
       <div className="min-w-[570px]">
       <h2 className="text-[30px] font-[700] pb-10 flex items-center justify-center ">Candidate Registration</h2>
       
       <form className="bg-white rounded p-10 flex flex-col gap-4 ">
       {/* mobile No */}
       <div className="flex justify-between p-3 bg-white login-border rounded gap-4 border">
         <img  className="" src="./icon/personicon.svg"  alt="" />
         <input 
         className="outline-none text-[20px] grow font-[400] text-inputplaceholde text-baseblue " 
         type="text"
         placeholder="Mobile No" />
      </div>
  
       {/* Password */}
      <div className="flex justify-between p-3 bg-white login-border rounded border-loginborder border-solid border ">
        <div className="flex justiy-between  gap-4">
        <img  className="" src="./icon/lockicon.svg"  alt="" />
         <input className="outline-none text-[20px] font-[400] text-inputplaceholde text-baseblue" type="password"placeholder="password" />
        </div>
         <img className="cursor-pointer hover:text-gray-500 " src="./icon/oneeyeicon.svg" alt="" />
      </div>
       {/*  Confirm Password  */}
      <div className="flex justify-between p-3 bg-white login-border rounded border-loginborder border-solid border ">
        <div className="flex justiy-between  gap-4">
        <img  className="" src="./icon/lockicon.svg"  alt="" />
         <input 
         className="outline-none text-[20px] font-[400] text-inputplaceholde text-baseblue" 
         type="password"
         placeholder="Confirm Password" />
        </div>
         <img className="cursor-pointer hover:text-gray-500 " src="./icon/oneeyeicon.svg" alt="" />
      </div>
 
        {/* Submit Buttons */}
      <button type='submit' className="bg-baseblue p-4 w-full rounded">
         Register
      </button>

      
        
   
  
       </form>

     

       </div>
  </div>
    )
}