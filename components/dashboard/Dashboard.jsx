"use client"

import DashboardButton from './DashboardButton'
import SeaServiceRecord from './SeaServiceRecord'
import StatusofApplication from './StatusofAPplicaton'

export default function Dashboard(){

  const status = [
    {
    sino: 1,
    Applicationid: 1234,
    name: "New COC Application",
    Payment: "Yes",
    Admit_Card: "print",
    Written: "Pass",
    Eye_Test: "Fail",
    Result: "Fail",
    CoC_Issued: "Yes",
    Details: "Details"
},
{
    sino: 700,
    Applicationid: 1235,
    name: "New COC Application",
    Payment: "Yes",
    Admit_Card: "print",
    Written: "Pass",
    Oral: 'Pass',
    Eye_Test: "Fail",
    Result: "Fail",
    CoC_Issued: "Yes",
    Details: "Details"
},
{
    sino: 2,
    Applicationid: 1235,
    name: "New COC Application",
    Payment: "Yes",
    Admit_Card: "print",
    Written: "Pass",
    Oral: 'Pass',
    Eye_Test: "Fail",
    Result: "Fail",
    CoC_Issued: "Yes",
    Details: "Details"
},
{
    sino: 4000000,
    Applicationid: 1235,
    name: "New COC Application",
    Payment: "Yes",
    Admit_Card: "print",
    Written: "Pass",
    Oral: 'Pass',
    Eye_Test: "Fail",
    Result: "Fail",
    CoC_Issued: "Yes",
    Details: "Details"
},
{
  sino: 4000000,
  Applicationid: 1235,
  name: "New COC Application",
  Payment: "Yes",
  Admit_Card: "print",
  Written: "Pass",
  Oral: 'Pass',
  Eye_Test: "Fail",
  Result: "Fail",
  CoC_Issued: "Yes",
  Details: "Details"
},
{
  sino: 95340,
  Applicationid: 1234,
  name: "New COC Application",
  Payment: "Yes",
  Admit_Card: "print",
  Written: "Pass",
  Eye_Test: "Fail",
  Result: "Fail",
  CoC_Issued: "Yes",
  Details: "Details"
},
]

    return(
        <div className="grid grid-cols-12  cleanFix ">
            {/* Menu */}
            <div className="col-span-2 h-screen bg">
               <div className='flex flex-col pt-5'>
                  <div className='flex gap-2 px-3 py-2 bg-baseblue'>
                    <img src="./icon/menuBlock.svg" alt="" />
                    <p className='font-inter text-25 font-semibold text-white leading-35 tracking-normal text-left'>Dashboard</p>
                  </div>
                  <div className='flex gap-2 px-3 py-2 text-black'>
                    <img src="./icon/menuBlock.svg" alt="" />
                    <p className='font-inter text-25  font-semibold  leading-35 tracking-normal text-left'>Profile</p>
                  </div>

                  <div className='flex gap-2 px-3 py-2 text-black'>
                    <img src="./icon/menuBlock.svg" alt="" />
                    <p className='font-inter text-25  font-semibold  leading-35 tracking-normal text-left'>Applicaiton</p>
                  </div>

                  <div className='flex gap-2 px-3 py-2 text-black'>
                    <img src="./icon/menuBlock.svg" alt="" />
                    <p className='font-inter text-25  font-semibold  leading-35 tracking-normal text-left'>Result</p>
                  </div>
                  <div className='flex gap-2 px-3 py-2 text-black'>
                    <img src="./icon/menuBlock.svg" alt="" />
                    <p className='font-inter text-25  font-semibold  leading-35 tracking-normal text-left'>Cirtificate</p>
                  </div>

                  <div className='flex gap-2 px-3 py-2 text-black'>
                    <img src="./icon/menuBlock.svg" alt="" />
                    <p className='font-inter text-25  font-semibold  leading-35 tracking-normal text-left'>Service Book</p>
                  </div>
               </div>
            </div>

            {/* Dashboard */}
            <div className="col-span-10  bg-[#00000012] ">
              <div className='flex flex-col ml-4'>
              <h2 className="py-4 text-xl">Dashboard</h2>
              <div className='p-4 bg-white flex flex-col'>
                <DashboardButton />
                <StatusofApplication details= {status}/>
           
              </div>
            </div>

        </div>
        </div>
    )
}