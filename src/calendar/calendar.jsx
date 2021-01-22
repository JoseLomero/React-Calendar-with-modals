import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'moment/locale/es';
import events from '../backend/events'
import Swal from 'sweetalert2'

import "react-big-calendar/lib/css/react-big-calendar.css";
import './calendar-styles.css';


const localizer = momentLocalizer(moment);

class Calendario extends Component {
    constructor() {
        super();
        this.state = { events };
    }

    handleSelect = ({ start, end }) => {
        Swal.fire({
            title: 'Introduce el evento:',
            icon: 'question',
            input: 'text',
            confirmButtonText: 'Aceptar',
        }).then((result) => {
            if (result.value) {
                const title = JSON.stringify(result.value)
                this.setState({
                    events: [
                        ...this.state.events,
                        {
                            start,
                            end,
                            title,
                        },
                    ],
                })
            }
        });
    }

    render() {
        return (
            <div className="calendar-container">
                <Calendar
                    selectable
                    localizer={localizer}
                    events={this.state.events}
                    defaultView="month"
                    defaultDate={new Date()}
                    style={{height: "70vh"}}
                    views={['month', 'week', 'day', 'agenda']}

                    onSelectEvent={event =>
                        Swal.fire({
                            title: event.title,
                            html: 'El evento empieza a las ' +
                                localizer.format(event.start, 'k:mm') +
                                '</br> Y termina a las ' +
                                localizer.format(event.end, 'k:mm'),
                            confirmButtonText: 'Aceptar',
                        })
                    }
                    onSelectSlot={this.handleSelect}

                />
            </div>
        );
    }
}

export default Calendario;