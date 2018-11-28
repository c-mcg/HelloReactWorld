import React, { Component } from 'react'
import { View } from 'react-native'
import Button from './Button'
import { func, number } from 'prop-types'

const BUTTONS_PER_ROW = 3;

export default class NumberPad extends Component {

    renderButtons() {
        let currRow = [];
        const buttons = [
            '7', '8', '9',
            '4', '5', '6',
            '1', '2', '3',
            '0', '.', '±',
        ];
        return buttons.reduce((acc, num, index) => {
            currRow.push(
                <Button
                    key={index}
                    text={num}
                    style={{ flex: 0, flexGrow: 1 }}
                    onPress={() => {this.props.onNumberPress(num)}}
                />
            );
            
            if (currRow.length === BUTTONS_PER_ROW || index === buttons.length - 1) {
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
}

NumberPad.defaultProps = { 
    onNumberPress: () => {},
}