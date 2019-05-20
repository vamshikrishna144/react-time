import React from 'react'

class Button extends React.Component {

    render() {

        const { label, onClick, id, timeZone, className} = this.props;

        return <button className={className} data-timezone={timeZone} id={id} onClick={onClick}>{label}</button>
    }
}

export default Button;
