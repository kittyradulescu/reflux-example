import EventsActions from "./eventsActions";
import Event from "../components/model";
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
            const response =  await axios.get('http://localhost:8080/allevents');
            this.updateEventsInformation(response.data);
        } catch (error) {
            console.error(error)
        }
    },

    startLoading() {
        state = "LOADING";
        this.trigger();
    },

    updateEventsInformation(events: Event[]) {
        state = "LOADED";
        eventsInformation = events;
        this.trigger();
    },

    getEventsInformation(): Event[] {
        return eventsInformation;
    },

    getState(): Object {
        return state;
    },

});

export default EventsStore;