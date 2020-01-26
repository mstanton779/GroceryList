// import { AppLoading } from 'expo';
// import { Asset } from 'expo-asset';
// import * as Font from 'expo-font';
// import React, { useState } from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import AppNavigator from './navigation/AppNavigator';

// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = useState(false);

//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return (
//       <AppLoading
//         startAsync={loadResourcesAsync}
//         onError={handleLoadingError}
//         onFinish={() => handleFinishLoading(setLoadingComplete)}
//       />
//     );
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <AppNavigator />
//       </View>
//     );
//   }
// }

// async function loadResourcesAsync() {
//   await Promise.all([
//     Asset.loadAsync([
//       require('./assets/images/robot-dev.png'),
//       require('./assets/images/robot-prod.png'),
//     ]),
//     Font.loadAsync({
//       // This is the font that we are using for our tab bar
//       ...Ionicons.font,
//       // We include SpaceMono because we use it in HomeScreen.js. Feel free to
//       // remove this if you are not using it in your app
//       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//     }),
//   ]);
// }

// function handleLoadingError(error) {
//   // In this case, you might want to report the error to your error reporting
//   // service, for example Sentry
//   console.warn(error);
// }

// function handleFinishLoading(setLoadingComplete) {
//   setLoadingComplete(true);
// }

import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src/screens/HomeScreen'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { Container, Root } from 'native-base'

// we will use these two screens later in our AppNavigator
import AddItem from './src/screens/AddItem'
import List from './src/screens/List'
import { AppLoading } from 'expo'

const AppNavigator = createStackNavigator(
    {
        Home,
        AddItem,
        List,
    },
    {
        initialRouteName: 'Home',
    }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isReady: false,
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ isReady: true })
        console.log('what')
    }
    render() {
        if (!this.state.isReady) {
            return <AppLoading />
        } else {
            return (
                <Root>
                    <Container>
                        <AppContainer />
                    </Container>
                </Root>
            )
        }
    }
}
