import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PersonDetails = () => {
    const { id } = useParams();
    console.log(id);
    const { data, error, isPending } = useFetch('http://icloudjo.com:8050/REST/persons/'+ id);
    return (
        <div className="person-details">
           { isPending && <div>Loading...</div>}
           { error && <div>{error}</div>}
           { data && data.map((data, index) => (
                <article key={index}>
                    <h1>{data.first_name} 's Details</h1>
                    <p><b>ID: </b>{data.id} </p>
                    <p><b>First Name: </b>{data.first_name}</p>
                    <p><b>Middle Name: </b>{data.middle_name}</p>
                    <p><b>Last Name: </b>{data.last_name}</p>
                    <p><b>Email: </b>{data.email}</p>
                    <p><b>Description: </b>{data.description}</p>
                </article>
           ))}
        </div>
      );
}
 
export default PersonDetails;