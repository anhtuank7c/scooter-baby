import React from 'react'
import { StyleSheet, Text, View, Button, NativeModules, requireNativeComponent } from 'react-native'

const Communicator = NativeModules.ReactCommunicator
const CounterView = requireNativeComponent('CounterView')
export default ({ screenProps, ...rest }) => {
  console.log('rest', rest)
  let contents = null
  if (screenProps && screenProps.scores) {
    contents = screenProps.scores.map(score => (
      <Text key={score.name}>
        {score.name}:{score.value}
        {'\n'}
      </Text>
    ))
  }

  const navigateToNative = () => {
    console.log('Go Back to native side')
    Communicator.navigateToNative()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.highScoresTitle}>Scooter Baby!</Text>
      <Text style={styles.scores}>{contents}</Text>
      <Button title='Back to Native' onPress={navigateToNative} />
      <CounterView style={styles.counter} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  counter: {
    width: 200,
    height: 200
  }
})
