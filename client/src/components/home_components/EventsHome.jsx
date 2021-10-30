import React from "react";
import "../../styles/EventsHome.css";

const EventsHome = ({img, title, description, ... rest}) => {
    return (
        <div className="event-home-card-container">
            <div className="event-home-card-body">
                <img className="event_img" src={img} />
                <h2 className="event_title">{title}</h2>
                <p className="event_description">{description}</p>
            </div>
            <button className="event-home-card-btn">Know More...</button>
        </div>
    );
}

export default EventsHome;
