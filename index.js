import React from 'react'
import { AppRegistry } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HighScores from './src/container/HighScores'

const App = createAppContainer(
  createStackNavigator({
    HighScores
  })
)

const Root = props => {
  return <App screenProps={props} />
}

// Module name
AppRegistry.registerComponent('scooterbaby', () => Root)
