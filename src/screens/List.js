import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ItemComponent from '../components/ItemComponent'
import axios from 'axios'
const SERVER_URL = 'http://10.0.0.133:8080'
export default class List extends Component {
    state = {
        items: [],
    }
    async componentDidMount() {
        console.log('in CDM')
        const { data } = await axios.get(`${SERVER_URL}/api/products`)
        this.setState({ items: data })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.items.length > 0 ? (
                    <ItemComponent items={this.state.items} />
                ) : (
                    <Text>No items</Text>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
    },
})
