import React, { Component } from 'react';
import './Today.css';
import axios from 'axios'; // package to call api REST

class Today extends Component {
    // Adds a class constructor that assigns the initial state values:
    constructor () {
        super();
        this.state = {
            btcprice: '',
            ltcprice: '',
            ethprice: '',
            hello: ''
        };
        this.state = { time: Date.now() };
    }

    // This is called when an instance of a component is being created and inserted into the DOM.
    componentWillMount () {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
            .then(response => {
                // We set the latest prices in the state to the prices gotten from Cryptocurrency.
                this.setState({ btcprice: response.data.BTC.USD });
                this.setState({ ethprice: response.data.ETH.USD });
                this.setState({ ltcprice: response.data.LTC.USD });

                localStorage.setItem('btcprice', response.data.BTC.USD);
                localStorage.setItem('ethprice', response.data.ETH.USD);
                localStorage.setItem('ltcprice', response.data.LTC.USD);

            })
            // Catch any error here
            .catch(error => {
                console.log(error)
            })

        axios.get('https://demo6843978.mockable.io/hello')
            .then(response => {
                // We set the latest prices in the state to the prices gotten from Cryptocurrency.
                this.setState({ hello: response.data.msg });
                localStorage.setItem('hello', response.data.msg);
            })
            // Catch any error here
            .catch(error => {
                console.log(error)
            })
        this.setState({ time: Date.now() });
    }


    render(){
        return(
            <div className="today--section container">
                <h2>Current Price</h2>
                <div className="columns today--section__box">
                    <div className="column btc--section">
                        <h5>${this.state.btcprice}</h5>
                        <p>1 BTC</p>
                    </div>
                    <div className="column eth--section">
                        <h5>${this.state.ethprice}</h5>
                        <p>1 ETH</p>
                    </div>
                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 LTC</p>
                    </div>
                </div>
                <div>
                    <p>https://demo6843978.mockable.io/hello</p>
                    <p>{this.state.hello} {this.state.time}</p>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.componentWillMount()
            , 3000);
        if (!navigator.onLine) {
            this.setState({ btcprice: localStorage.getItem('btcprice') });
            this.setState({ ethprice: localStorage.getItem('ethprice') });
            this.setState({ ltcprice: localStorage.getItem('ltcprice') });
            this.setState({ hello: localStorage.getItem('hello')+'OFFLINE' });
            this.setState({ time: Date.now() });
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Today;