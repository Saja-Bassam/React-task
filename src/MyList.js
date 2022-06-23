const MyList = ({ ...props }) => {
    const {list} = props;
    return (  
        <div className='list'>

      {list.map(todo => (
        <div className="preview" key={todo.id}>

          <h2> {todo.title} </h2>
          <p id="id"> ID : {todo.id}</p>

           <p id="completed">Completed : {todo.completed} <br /> </p>
        </div>
      ))}
    </div>
    );
};
 
export default MyList;