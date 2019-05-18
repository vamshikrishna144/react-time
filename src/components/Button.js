import React from 'react'

class Button extends React.Component {

    render() {

        const { label, onClick, id, timeZone} = this.props;

        return <button data-timezone={timeZone} id={id} onClick={onClick}>{label}</button>
    }
}

export default Button;
