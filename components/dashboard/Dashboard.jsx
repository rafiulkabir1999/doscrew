import DashboardButton from './DashboardButton'
import SeaServiceRecord from './SeaServiceRecord'
import StatusofApplication from './StatusofAPplicaton'

export default function Dashboard(){
    return(
        <div className="grid grid-col-2 ">
            <div className="w-full">
              menu item
            </div>
            {/* Dashboard */}
            <div className="flex flex-col">
               <h2 className="py-4 text-xl">Dashboard</h2>
               <DashboardButton/>
               <StatusofApplication/>
               <SeaServiceRecord/>
            </div>

        </div>
    )
}