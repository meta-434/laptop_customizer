import React, { Component } from 'react';
import slugify from 'slugify';
import SelectionButton from './SelectionButton';

export default class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));

                return (
                    <div key={itemHash} className="feature__item">
                        <input
                            type="radio"
                            id={itemHash}
                            className="feature__option"
                            name={slugify(feature)}
                            checked={item.name === this.props.selected[feature].name}
                            onChange={e => this.props.updateFeature(feature, item)}
                        />
                        <label htmlFor={itemHash} className="feature__label">
                            {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
                        </label>
                    </div>
                )
            })

            return (
                <SelectionButton
                    featureHash={featureHash}
                    feature={feature}
                    options={options}
                />
            )
        })

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}