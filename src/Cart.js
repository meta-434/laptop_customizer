import React, { Component } from 'react';
import Total from './Total';
import CartSelection from "./CartSelection";

export default class Cart extends Component {
    render() {

        const cart = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
                <CartSelection
                    featureHash={featureHash}
                    feature={feature}
                    selectedOption={selectedOption}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            )
        });

        return (
            <>
                <h2>Your cart</h2>
                {cart}
                <Total
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    selected={this.props.selected}
                />
            </>
        );
    }
}