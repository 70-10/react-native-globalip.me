import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ip: "" };
    axios("http://globalip.me", {
      headers: { "User-Agent": "curl/7.54.0" }
    }).then(res => {
      console.log(res.data);
      this.setState({ ip: res.data });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.ip}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
