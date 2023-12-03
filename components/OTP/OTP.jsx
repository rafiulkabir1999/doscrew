export default function SubmitOTP (){
    return(
        <div className="relative bg-bg_image obj-cover bg-cover object-fit h-screen ">
           <div className="flex flex-col mx-auto md:w-[40%] xl:w-[30%] 2xl:max-w-[687px] p-4 pt-20">
              <div className="bg-[#D5ECC2] text-[700] font-">
                  <p className="font-inter font-[20px] font-[700] px-4 py-2">OTP</p>
              </div>
              
              <div className="flex flex-col justify-center p-6 gap-4 bg-white pb-10 pt-5">
                 <p className="leading-[29px] font-[400] text-center text-[20px]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                  <div className="flex gap-2 justify-center justify-cener">
                  <input type="text" maxLength={1} className="w-12 p-4 border outline-none " />  
                  <input type="text" maxLength={1} className="w-12 p-4 border outline-none " />  
                  <input type="text" maxLength={1} className="w-12 p-4 border outline-none " />  
                  <input type="text" maxLength={1} className="w-12 p-4 border outline-none " />  
                  <input type="text" maxLength={1} className="w-12 p-4 border outline-none " />  
                  </div>  
                  <p className="font-[700] text-resendOTP text-center"> Resent OTP</p>   

                  <button className="py-4 w-full text-white rounded bg-baseblue">Confirm</button>       
              </div>

           </div>
        </div>
    )
}