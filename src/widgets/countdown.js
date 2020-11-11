import React from 'react';
// Nov 15, 2020 09:30:00
class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { date: new Date(), timeStr: "Loading" };
        this.countDownDate = new Date(this.props.time).getTime();
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

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = this.countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.setState({
            timeStr: days + "D " + hours + "H " +
                minutes + "M " + seconds + "S "
        });
    }

    render() {
        return ( <
            div className = { this.props.looks } > { this.state.timeStr } <
            /div>
        );
    }
};

export default Countdown;