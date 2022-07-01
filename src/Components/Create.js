import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [first_name, setFname] = useState('');
    const [middle_name, setMname] = useState('');
    const [last_name, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const person = { first_name, middle_name, last_name, email, description };
        setIsPending(true);
        fetch('http://icloudjo.com:8050/REST/persons', {
            method: 'POST',
            headers: { "Content-Type": "application/json"} ,
            body: JSON.stringify(person),
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            setIsPending(false);
            history.push('/')
        })

    }

    return ( 
        <div className="create">
            <h2>Add a new Person</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input 
                type="text"
                required
                value={first_name}
                onChange={(e) => setFname(e.target.value)}
                />
                  <label>Middle Name: </label>
                <input 
                type="text"
                required
                value={middle_name}
                onChange={(e) => setMname(e.target.value)}
                />
                 <label>Last Name: </label>
                <input 
                type="text"
                required
                value={last_name}
                onChange={(e) => setLname(e.target.value)}
                />
                 <label>Email:  </label>
                <input 
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                 <label>Description: </label>
                <input 
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                {!isPending && <button>Add Person</button>}
                {isPending && <button disabled>Adding Person...</button>}

            </form>
        </div>
     );
}
 
export default Create ;