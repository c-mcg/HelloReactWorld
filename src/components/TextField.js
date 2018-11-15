import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { string, object, func, bool, number } from 'prop-types'

export default class TextField extends Component {

    render() {
        return <TextInput 
            style={{borderColor: 'lightgrey', width: '90%', borderWidth: 1}}
            value={this.props.value}    
            onChangeText={this.props.onChange}
        />
    }

}

TextField.propTypes = {
    value: string,
    onChange: func,
}

TextField.defaultProps = { 
    value: "",
    onChange: () => {},
}