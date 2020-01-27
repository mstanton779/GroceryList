import React, { Component } from 'react'
import { Button, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View>
                <Button
                    title="Add an item"
                    onPress={() => this.props.navigation.navigate('AddItem')}
                />
                <Button
                    title="See Your Grocery List"
                    color="green"
                    onPress={() => this.props.navigation.navigate('List')}
                />
                <Button
                    title="Add Grocery with Bar Code"
                    onPress={() =>
                        this.props.navigation.navigate('ScannerScreen')
                    }
                />
            </View>
        )
    }
}
