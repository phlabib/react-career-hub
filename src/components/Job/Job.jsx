
import { GrLocation , GrCurrency} from "react-icons/gr";

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-slate-200 shadow-xl py-4 ">
        <figure><img src= {logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
        <div>
           <button className="px-5 py-2 font-extrabold border rounded-md border-purple-500 mr-4 text-purple-700">{remote_or_onsite}</button> 
           <button className="px-5 py-2 font-extrabold border rounded-md border-purple-500 mr-4 text-purple-700">{job_type}</button>
        </div>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">View Details</button>
          </div>
          <div className="flex gap-8">
            <h2 className="flex gap-2 items-center"><GrLocation></GrLocation>{location}</h2>
            <h2 className="flex gap-2 items-center"><GrCurrency></GrCurrency>{salary}</h2>

          </div>
        </div>
      </div>
    );
};

export default Job;