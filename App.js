import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/Header';
import { Factorial } from './src/components/Factorial';

export default class App extends React.Component {
  state = {
    loading: true,
    number: {},
  };

  async componentDidMount() {
    const url = "https://www.random.org/integers/?num=1&min=1&max=2&col=1&base=10&format=plain&rnd=new";
    const response = await fetch(url);
    const Data = await response.json();
    this.setState({ number: Data, loading: false })
  }

  render() {

    return (
      <View>
        <View style={styles.global}>
          <Header title="Орёл и решка" />
          <View style={styles.container}>
            <Factorial />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: 'black',
    width: "100%",
    height: "100%"
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 60
  }
});