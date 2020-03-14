import React from "react";
import Reflux from "reflux";
import EventsStore from "../reflux/EventsStore";
import EventsActions from "../reflux/eventsActions";
import AllEvents from "./AllEvents";
import createClass from "create-react-class";

const AllEventsConnector = createClass({

    mixins: [
        Reflux.listenTo(EventsStore, "handleStoreUpdate"),
    ],

    getInitialState() {
        return this.getCurrentState();
    },

    handleStoreUpdate() {
        this.setState(this.getCurrentState());
    },

    updateStores() {
        EventsActions.loadEventsDetails();
    },

    getCurrentState() {
        return {
            eventsInformation: EventsStore.getEventsInformation(),
        };
    },

    componentDidMount() {
        this.updateStores();
    },

    render() {
        return (
            <AllEvents eventsInformation={this.state.eventsInformation}/>
        );
    }

});


export default AllEventsConnector;