import React, {Component} from 'react';
import Gradient from '../gradient'
import ScheduleCourse from './scheduleCourse'
import ProgressTracker from './progressTracker';

class Schedule extends Component {
    render() {
        return (
            <div className="schedule">
                <Gradient/>   
                <h1 className="schedule__title">Course Schedule</h1>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <ScheduleCourse title={'Problem Solving'}/>
                <ProgressTracker/>
            </div>

        )
    }
}

export default Schedule;