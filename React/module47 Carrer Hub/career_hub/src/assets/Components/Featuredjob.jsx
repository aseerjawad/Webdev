import { Link } from "react-router-dom";


const Featuredjob = ({ elements }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = elements
    return (
        <div className="border-2 border-black rounded-lg p-5">
            <img className="my-5" src={logo} alt="" />
            <h1 className="font-bold">{job_title}</h1>
            <p>{company_name}</p>
            <div className="flex gap-x-5 my-2">
                <p className="border-2 text-blue-600 rounded-md border-blue-600 p-2">{remote_or_onsite}</p>
                <p className="border-2 text-blue-600 rounded-md border-blue-600 p-2">{job_type}</p>
            </div>
            <Link to={`/job/${id}`}><button className="border-2 text-white rounded-md bg-blue-500 p-2">View Details</button></Link>

        </div>
    );
};

export default Featuredjob;