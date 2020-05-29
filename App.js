import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Header } from './src/components/Header';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    else {
      let movies = this.state.dataSource.map((val, key) => {
        return <View key={key}>
          <Text>{val.title}</Text>
        </View>
      })
      return (
        <View>
          <View style={styles.global}>
            <Header title="Список фильмов" />
            <View style={styles.container}>{movies}</View>
          </View>
            
        </View>
      )
    }
  }
}


const styles = StyleSheet.create({
  global: {
    width: "100%",
    height: "100%",
    fontSize: 30
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e8aa0e",
    color: "white",
    position: "relative",
    textAlign: "center",
    paddingTop: "5%",
    paddingLeft: "33%"
  }
});