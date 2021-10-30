import React from "react";
import Ofest from "./ofest";
import EventGrid from "../components/EventsGrid";

const Events = () => {
  return (
   
      <section className="events" style={{
        width: '90%'
      }}>
        <EventGrid/>
      </section>
   

  );
};

export default Events;
