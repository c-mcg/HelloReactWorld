import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { string, func, bool } from 'prop-types'

export default class TextField extends Component {

    render() {
        return <TextInput 
            style={{borderColor: 'lightgrey', width: '90%', borderWidth: 1}}
            value={this.props.value}    
            onChangeText={this.props.onChange}
            editable={! this.props.disabled}
            selectTextOnFocus={! this.props.disabled}
        />
    }

}

TextField.propTypes = {
    value: string,
    onChange: func,
    disabled: bool,
}

TextField.defaultProps = { 
    value: "",
    onChange: () => {},
    disabled: false,
}