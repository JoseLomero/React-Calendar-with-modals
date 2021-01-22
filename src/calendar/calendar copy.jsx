import React from 'react'
import BigCalendar, { Calendar, Views } from 'react-big-calendar'
import events from '../backend/events'
import moment from 'moment';

const propTypes = {}
const localizer = BigCalendar.momentLocalizer(moment)

class Calendario extends React.Component {
    constructor(...args) {
        super(...args)

        this.state = { events }
    }

    handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
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

    render() {
        return (
            <>
                <Calendar
                    selectable
                    localizer={localizer}
                    events={this.state.events}
                    defaultView={Views.WEEK}
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date(2015, 3, 12)}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={this.handleSelect}
                />
            </>
        )
    }
}

Calendario.propTypes = propTypes

export default Calendario