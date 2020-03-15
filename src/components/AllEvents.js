import React from "react";
import PropTypes from 'prop-types';
import createClass from "create-react-class";
import "../styles/AllEvents.scss";

const AllEvents = createClass({
    propTypes: {
        eventsInformation: PropTypes.object.isRequired,
    },

    renderHeader() {
        return <div className="header">
            <div className="title">Technical Events</div>
        </div>
    },

    renderEvents() {
        return this.props.eventsInformation && this.props.eventsInformation.map(event =>
            <div className="event-details" key={event.id}>

                <div className="event-name">
                    {event.name}
                </div>

                <div className="event-description">
                    {event.description}
                </div>

                <button className="event-info">
                    View Details
                </button>

                <button className="event-join">
                    Join
                </button>
            </div>);
    },

    render() {
        return <div className="main-events">
            <div>{this.renderHeader()}</div>
            <div className="events-container">{this.renderEvents()}</div>
        </div>;
    }

});

export default AllEvents
