import React from 'react';
import Time from "./Time";
import Button from "./Button";
import _ from 'lodash';

class TimeWithLocale extends React.Component {

    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.state = {timeZone: "America/New_York"}
    }

    buttonClick(e) {
        const timeZone = e.target.dataset.timezone;
        this.setState({timeZone: timeZone})
    }

    render() {
        const timeZones = [
            {
                id: 'india',
                label: 'India',
                timeZone: "Asia/Kolkata"
            },
            {
                    id: 'USA',
                    label: 'USA',
                    timeZone: "America/New_York"
            }
        ]
        const buttonContents = _.map(timeZones,(item) => {

            return <Button timeZone={item.timeZone} key={item.id} id={item.id} onClick={this.buttonClick} label = {item.label}/>
        })

        return (
            <div>
                <Time timeZone = {this.state.timeZone}/>
                {buttonContents}
            </div>
            )
    }
}

export default TimeWithLocale;
