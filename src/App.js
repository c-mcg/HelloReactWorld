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

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      currentInput: 0,
      result: 0,
    }

  }

  setCurrentInput(newValue) {
    this.setState({
      currentInput: parseInt(newValue),
    })
  }

  calculateValue() {
    // const { a } = this.state;
    // this.setState({
    //   result: parseInt(a) + parseInt(b),
    // })
  }

  add() {
    this.setState({
      result: this.state.result + this.state.currentInput,
      // currentInput: 0,
    });

  }

  clear() {
    this.setState({
      result: 0,
      currentInput: 0,
    })
  }

  render() {
    const { currentInput } = this.state;

    return (
      <View style={styles.container}>
        <TextField value={currentInput} onChange={this.setCurrentInput} />

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

          <Button
            text="="
            onPress={this.calculateValue}
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

