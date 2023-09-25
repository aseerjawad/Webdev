import { useLoaderData, useParams, } from "react-router-dom";


const JobDetails = () => {

    const details = useLoaderData()
    const { id } = useParams();
    console.log(details, id)

    return (
        <div>
            <h1>Job details of {id}</h1>
        </div>
    );
};

export default JobDetails;