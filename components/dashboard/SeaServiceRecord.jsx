export default function Dashboard(){

    const StatusofApplication = [{
        sino:1,
        Applicationid:1234,
        name:"New COC Application",
        Payment:"Yes",
        Admit_Card : "print",
        Written:"Pass",
        Eye_Test:"Fail",
        Result: "Fail",
        CoC_Issued:"Yes",
        Details:"Details"
    },
    v
]
    return(
       <div className="flex flex-col">
         <p className="font-[700] text-[25px] leading-[140px] pb-4">status of application</p>
         <table>
            <tr>
                <th>SI No</th>
                <th>Application ID</th>
                <th>Name</th>
                <th>Payment</th>
                <th>Admit Card</th>
                <th>Written</th>
                <th>Oral</th>
                <th>Eye Test</th>
                <th>Result</th>
                <th>CoC Issued</th>
                <th>Details</th>
            </tr>

           {/* {StatusofApplication.map( list => {
            return     <tr>
                   <td>1</td>
                   <td>123</td>
               </tr>
           })} */}

         </table>
        </div>
    )
}