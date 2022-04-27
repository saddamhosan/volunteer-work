import React from 'react';
import useEvent from './hook/useEvent';

const Events = () => {
    // const [events,setEvents]=useState([])
    // useEffect(()=>{
    //     const getEvents=async()=>{
    //         const { data } = await axios.get(
    //           "https://blooming-tor-73132.herokuapp.com/events"
    //         );
    //         setEvents(data)
    //     }
    //     getEvents()
    // },[])

    const [events]=useEvent()
    return (
        <div className='grid grid-cols-4 mx-10 gap-10 my-32'>
            {
                events.map(event=><div key={event._id}>
                    <img src={event.img} alt="" />
                    <p className='bg-blue-500 mt-3 rounded-md text-white font-bold text-center text-xl'>{event.name}</p>
                </div>)
            }
        </div>
    );
};

export default Events;