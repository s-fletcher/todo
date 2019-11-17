import React from 'react';
import './Header.scss';


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds > 9 ? "" + seconds : "0" + seconds
    var strTime = <div>{hours}:{minutes}<span className="seconds">:{seconds}</span> <span className="ampm">{ampm}</span></div>;
    return strTime;
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            months: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="header">
                <div className="date">
                    <div className="day">{this.state.date.getDate()}</div>
                    <div className="month">{this.state.months[this.state.date.getMonth()]}</div>
                    <div className="year">{this.state.date.getFullYear()}</div>
                </div>
                <div className="weekDay">{this.state.days[this.state.date.getDay()]}<br></br>{formatAMPM(this.state.date)}</div>
            </div>
        );
    }
}

export default Header;
