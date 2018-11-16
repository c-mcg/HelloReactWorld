import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { string, func, object } from 'prop-types'

const styles = {
  button: {
    borderRadius: 8,
    backgroundColor: 'lightblue',
    padding: 8, 
  },
  buttonText: {
    color: 'white,'
  }
}

export default class Button extends Component{

    render() {
        const buttonStyle = {
            ...styles.button,
            ...this.props.style,
        };
        const textStyle = {
            ...styles.text,
            ...this.props.style,
        }; 

        return (
            <TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
                <Text style={textStyle}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }

}

Button.propTypes = {
    text: string,
    onPress: func,
    style: object,
}

Button.defaultProps = {
    text: "Press Here",
    onPress: () => {},
    style: {}
}