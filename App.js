import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src/screens/HomeScreen'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { Container, Root } from 'native-base'
import AddItem from './src/screens/AddItem'
import List from './src/screens/List'
import ScannerScreen from './src/screens/ScannerScreen'
import { AppLoading } from 'expo'

const AppNavigator = createStackNavigator(
    {
        Home,
        AddItem,
        List,
        ScannerScreen,
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
