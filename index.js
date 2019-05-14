/**
 * REACT-NAVIGATION
 * BEGIN
 */

// import React from 'react'
// import { AppRegistry } from 'react-native'
// import { createStackNavigator, createAppContainer } from 'react-navigation'
// import HighScores from './src/container/HighScores'

// const App = createAppContainer(
//   createStackNavigator({
//     HighScores
//   })
// )

// const Root = props => {
//   return <App screenProps={props} />
// }

// // Module name
// AppRegistry.registerComponent('scooterbaby', () => Root)

/**
 * REACT-NAVIGATION
 * END
 */

import { Navigation } from 'react-native-navigation'
import HighScores from './src/container/HighScores'

Navigation.registerComponent('HighScores', () => HighScores)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HighScores',
              options: {
                topBar: {
                  title: {
                    text: 'Scooter'
                  }
                }
              }
            }
          }
        ]
      }
    }
  })
})
