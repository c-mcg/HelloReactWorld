/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import autoBind from 'auto-bind'

import TextField from './components/TextField'
import Button from './components/Button'
import NumberPad from './components/NumberPad'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: 'row',
  },
});

function add(x, y) {
    return x + y;
}

export default class App extends Component {

  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      currentInput: 0,
      result: 0,
      lastOperation: null,
    }

  }

  onInputChange(newValue) {
    this.setState({
      currentInput: parseInt(newValue),
    })
  }

  setResult(result){
    this.setState({ result });
  }

  calculate() {
      console.log(this.state);
      this.forceUpdate(() => {
      const { lastOperation, result, currentInput } = this.state;
      if (lastOperation) {
        const newResult = lastOperation(result, currentInput);
        this.setState({
            result: newResult,
            lastOperation: null,
        })
      }
    })
      //
  }

  add(){
    console.log('result on add', this.state.currentInput)
    this.setState({
        result: this.state.currentInput,
        lastOperation: add
    })
  }

  clear() {
    this.setState({
      result: 0,
      currentInput: 0,
      lastOperation: null,
    })
  }

  setCurrentInput(val) {
    this.setState({
        currentInput: val
    })
  }

  render() {
    const { currentInput } = this.state;

    return (
      <View style={styles.container}>
        <TextField value={currentInput.toString()} onChange={this.onInputChange} disabled />

        <Text style={styles.welcome}>{this.state.result}</Text>

        <View style={styles.buttonRow}>
          <Button
            style={{
              backgroundColor: '#336699',
              color: 'white',
            }}
            text="Clr"
            onPress={this.clear}
          />

            <NumberPad onNumberPress={this.setCurrentInput}></NumberPad>
          <Button
            text="1"
            onPress={() => this.setCurrentInput(1)}
          />

          <Button
            text="="
            onPress={this.calculate}
          />

          <Button
            text="+"
            onPress={this.add}
          />
        </View>

      </View>
    );
  }
}

