import EventsActions from "./eventsActions";

const Reflux = require("reflux");
const axios = require('axios');

let state = "EMPTY";
let eventsInformation = [];

const EventsStore = Reflux.createStore({

    init() {
        this.listenTo(EventsActions.loadEventsDetails, this.onLoadEventsDetails);
    },

    async onLoadEventsDetails() {
        try {
            const response = await axios.get('http://localhost:8080/allevents');
            this.updateEventsInformation(response.data);
        } catch (error) {
            console.error(error);
            this.setError();
        }
    },

    startLoading() {
        state = "LOADING";
        this.trigger();
    },

    updateEventsInformation(events) {
        state = "LOADED";
        eventsInformation = events;
        this.trigger();
    },

    getEventsInformation() {
        return eventsInformation;
    },

    getState() {
        return state;
    },

    setError() {
        state = "ERROR";
        this.trigger();
    },

});

export default EventsStore;