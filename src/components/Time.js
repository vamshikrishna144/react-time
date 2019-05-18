import React from 'react';

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dateTime: new Date().getHours() + ":"
                + new Date().getMinutes() + ":"
                + new Date().getSeconds()};
    }

    componentDidMount() {
        setInterval(() => {
            const timeZone = this.props.timeZone || "America/New_York";

            var asiaTime = new Date().toLocaleString("en-US", {timeZone: timeZone});
            var currentDate = new Date(asiaTime);
            var dateTime = currentDate.getHours() + ":"
                + currentDate.getMinutes() + ":"
                + currentDate.getSeconds();

            this.setState({ dateTime: dateTime })

        }, 1000)
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        return (<h1 className={'time'}>{this.state.dateTime}</h1>)
    }
}

export default Time;
