import React from "react";
import PropTypes from 'prop-types';
import createClass from "create-react-class";

const AllEvents = createClass({
    propTypes: {
        eventsInformation: PropTypes.array.isRequired,
    },
    render() {
        return this.props.eventsInformation.map(event =>
            <div key={event.id}>
                {event.name}
            </div>
        )
    }

});

export default AllEvents
