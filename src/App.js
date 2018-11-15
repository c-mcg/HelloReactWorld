/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';
import autoBind from 'auto-bind'

import TextField from './components/TextField'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      a: "3",
      b: "6",
      result: null,
    }

  }

  setA(a) {
    this.setState({ a })
  }

  setB(b) {
    this.setState({ b })
  }

  calculateValue() {
    const { a, b } = this.state;
    this.setState({
      result: parseInt(a) + parseInt(b),
    })
  }

  render() {
    const { a, b } = this.state;

    return (
      <View style={styles.container}>
        <TextField value={a} onChange={this.setA}/>
        <TextField value={b} onChange={this.setB}/>
        <Text style={styles.welcome}>{parseInt(a) + parseInt(b)}</Text>
        <Text style={styles.instructions}>example</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {/* <Button> </Button> */}
      </View>
    );
  }
}

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
});
