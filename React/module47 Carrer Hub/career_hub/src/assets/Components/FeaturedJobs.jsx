import { useEffect, useState } from "react";
import Featuredjob from "./Featuredjob";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [limit, setLimit] = useState(4)

    useEffect(() => {
        fetch('../../../public/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div className=" mt-20">
            <h1 className="text-center text-4xl font-bold mb-5">Featured Jobs</h1>
            <div className="grid grid-cols-2 gap-5 ">

                {
                    jobs.slice(0, limit).map(data => <Featuredjob key={data.id} elements={data}></Featuredjob>)
                }
            </div>
            <div className={limit === parseFloat(jobs) && 'hidden'}>
                <button onClick={() => setLimit(jobs.length)} className={`bg-red-500 my-5 text=white p-2 rounded-lg`}>Show All</button></div>
        </div>

    );
};

export default FeaturedJobs;