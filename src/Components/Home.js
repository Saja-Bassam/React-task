import useFetch from "../hooks/useFetch";
import MyList from "./MyList";

const Home = () => {
    const {data: persons, isPending, error} =useFetch('http://icloudjo.com:8050/REST/persons');
    return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {persons && (<MyList list={persons}/>)}
        </div>
     );
}
 
export default Home;