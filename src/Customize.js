import React, { Component } from 'react';
import CustomOption from "./CustomOption";

export default class Features extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
                return (
                    <CustomOption
                        feature={feature}
                        idx={idx}
                        {...this.props}
                        />
                );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
};