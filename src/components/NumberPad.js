import React, { Component } from 'react'
import { View } from 'react-native'
import Button from './Button'
import { func, number } from 'prop-types'

export default class NumberPad extends Component {

    renderButtons() {
        let currRow = [];
        return [...Array(10).keys()].reduce((acc, num, index) => {
            currRow.push(
                <Button
                    key={index}
                    text={num.toString()}
                    onPress={() => {this.props.onNumberPress(num)}}
                />
            );

            if (currRow.length === this.props.buttonsPerRow || index === 9) {
                acc.push(
                    <View style={{flexDirection: 'row'}} key={acc.length}>
                        { currRow }
                    </View>
                );
                currRow = [];
            }

            return acc;
        }, []);
    }

    render() {
        return (
            <View>
                { this.renderButtons() }
            </View>
        )
    }

}

NumberPad.propTypes = {
    onNumberPress: func,
    buttonsPerRow: number,
}

NumberPad.defaultProps = { 
    onNumberPress: () => {},
    buttonsPerRow: 4,
}