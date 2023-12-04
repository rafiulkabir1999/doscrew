export default function Register(){
    return(
      <div className="cleanFix relative bg-bg_Cover  flex flex-col p-6 rounded shadow-noticeboard flex flex-col gap-y-10 text-white items-center h-[100%] ">
      <div className="w-full h-[100vh] flex justify-center pt-10">
      
      
       <form action="w-[678px]">
      <h2 className="text-[20px] font-bold pb-8 flex items-center justify-center font-inter">Candidate Registration</h2>

       <div className="bg-white rounded p-10 flex flex-col gap-2 ">

{/*NID No  */}
<div className="flex justify-between p-3 bg-white login-border rounded gap-4 border">
  <input className="outline-none text-[20px] grow font-[400] text-inputplaceholde text-baseblue " 
  type="text"
  placeholder="NID No." />
</div>


{/*Date of Birth */}
<div className="flex justify-between p-3 bg-white login-border rounded gap-4 border">
  <input 
  className="outline-none text-[20px] grow font-[400] text-inputplaceholde text-baseblue " 
  type="date"
  placeholder="Date of Birth" />
</div>

{/* Mobile No. */}
<div className="flex justify-between p-3 bg-white login-border rounded gap-4 border">
  <input className="outline-none text-[20px] grow font-[400] text-inputplaceholde text-baseblue " 
  type="text"
  placeholder="Noble NO." />
</div>

{/* Password */}
<div className="flex justify-between p-3 bg-white login-border rounded gap-4 border">
  <input className="outline-none text-[20px] grow font-[400] text-inputplaceholde text-baseblue " 
  type="text"
  placeholder="Password" />
</div>

{/* Confirm Password */}
<div className="flex justify-between p-3 bg-white login-border rounded gap-4 border">
  <input className="outline-none text-[20px] grow font-[400] text-inputplaceholde text-baseblue " 
  type="text"
  placeholder="Confirm Password" />
</div>




 
 
 <button className="bg-baseblue p-4 text-white font-bold font-[25px] mt-2">
  Register
  </button>

</div>


       </form>

      </div>
 </div>
    )
}