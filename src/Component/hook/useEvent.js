import axios from "axios";
import { useEffect, useState } from "react";

const useEvent=()=>{
    const [events, setEvents] = useState([]);
    useEffect(() => {
      const getEvents = async () => {
        const { data } = await axios.get(
          "https://blooming-tor-73132.herokuapp.com/events"
        );
        setEvents(data);
      };
      getEvents();
    }, []);
    return [events, setEvents];
}
export default useEvent