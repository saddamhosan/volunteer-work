import axios from 'axios';
import React from 'react';
import useEvent from './hook/useEvent';

const AddEvent = () => {
    const [events, setEvents] = useEvent();
const handleAddEvent=(e)=>{
    e.preventDefault()
    const name=e.target.name.value
    const img=e.target.img.value
    const event={name,img}
    console.log(event);
    axios
      .post("https://blooming-tor-73132.herokuapp.com/events", event)
      .then((res) => {
          e.target.reset()
          console.log('Add success');
      });
}

 const handleDelateEvent=(id)=>{
     const confirm=window.confirm('are you sure you went to delete')
     if(confirm){
        fetch(`http://localhost:5000/event/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const rest = events.filter((event) => event._id !== id);
              setEvents(rest);
              console.log("Delete successfully");
            }
          });
     }
    
 }

    return (
      <div>
        <div className="w-1/2 mx-auto my-10 font-serif">
          <h1 className="text-center text-4xl font-bold my-2 text-blue-500">
            Add Event
          </h1>
          <form onSubmit={handleAddEvent}>
            <input
              className="border-2 rounded-xl p-2 m-2 w-10/12"
              type="text"
              name="name"
              placeholder="Name"
            />
            <br />
            <input
              className="border-2 rounded-xl p-2 m-2 w-10/12"
              type="text"
              name="img"
              placeholder="image url"
            />
            <br />
            <input
              className="bg-blue-600 text-white text-xl font-bold px-5 py-2 rounded-xl ml-2 my-2"
              type="submit"
              value="Add Event"
            />
          </form>
        </div>

        <div className="w-1/2 mx-auto">
          {events.map((event) => (
            <div key={event._id}>
              <p className="text-2xl my-2">
                {event.name}{" "}
                <button
                  onClick={() => handleDelateEvent(event._id)}
                  className="bg-red-500 text-white rounded-xl px-2 ml-2"
                >
                  X
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AddEvent;