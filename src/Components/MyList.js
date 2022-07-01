import { Link } from "react-router-dom";

const MyList = ({ ...props }) => {
    const {list} = props;
    return (  
        <div className='list'>

      {list.map(person => (
        <div className="preview" key={person.id}>
          <Link to={`/persons/${person.id}`}>
          <h2> {person.first_name +" "+ person.last_name} </h2>
          <p> Email : {person.email}</p>
          </Link>
        </div>
      ))}
    </div>
    );
};
 
export default MyList;