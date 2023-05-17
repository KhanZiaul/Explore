import { useLoaderData } from "react-router-dom";
import Jobs from "../Jobs/Jobs";


const Home = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-10">
                {
                    jobs?.map(job => <Jobs key={job._id} job={job}></Jobs>)
                }
            </div>
        </div>
    );
};

export default Home;