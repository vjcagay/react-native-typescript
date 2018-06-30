import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

class App extends React.Component {
  render() {
    return(
      <View style={styles.view}>
        <Text style={styles.text}>Hello World of React Native!</Text>
      </View>
    )
  }
}

export default App;
