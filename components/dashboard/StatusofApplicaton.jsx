"use client"
export default function StatusOfApplication(props) {

    
    return (
        <div className="flex flex-col">
            <p className="font-bold text-2xl leading-7">Status of Application</p>
            <table className="">
                <thead className="p-4">
                    <tr className="text-base">
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

                </thead>
                <tbody>


                    {/* {
                        props?.details?.map((list, idx) => (
                            <tr className="" key={idx}>
                                <td>{list?.sino}</td>
                                <td>{list?.Applicationid}</td>
                                <td>{list?.name}</td>
                                <td>{list?.Payment}</td>
                                <td>{list?.Admit_Card}</td>
                                <td>{list?.Written}</td>
                                <td>{list?.Oral}</td>
                                <td>{list?.Eye_Test}</td>
                                <td>{list?.Result}</td>
                                <td>{list?.CoC_Issued}</td>
                                <td>{list?.Details}</td>
                            </tr>
                        ))
                    } */}

            

                </tbody>

            </table>
        </div>
    )

}