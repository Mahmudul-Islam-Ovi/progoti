import { FaBolt, FaUserCog, FaTools, FaHome } from "react-icons/fa";

const icons:any = {
  FaBolt: <FaBolt/>,
  FaUserCog: <FaUserCog/>,
  FaTools: <FaTools/>,
  FaHome: <FaHome/>
}

export default function Features({data}:any){
  return(
    <div className="grid md:grid-cols-4 gap-6 p-10">
      {data.map((f:any,i:number)=>(
        <div key={i} className="bg-white shadow p-5 text-center rounded">
          <div className="text-orange-500 text-2xl">{icons[f.icon]}</div>
          <h3>{f.title}</h3>
        </div>
      ))}
    </div>
  )
}

