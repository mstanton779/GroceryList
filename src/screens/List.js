import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ItemComponent from '../components/ItemComponent'
import axios from 'axios'
import Aisle from '../components/Aisle'
const SERVER_URL = 'http://172.17.21.173:8080'
export default class List extends Component {
    state = {
        items: [],
    }
    async componentDidMount() {
        try {
            const { data } = await axios.get(`${SERVER_URL}/api/list`)
            let arrayAisle = []
            for (let i = 1; i < 9; i++) {
                arrayAisle.push(data.filter(item => item.aisle === i))
            }
            console.log(arrayAisle)
            this.setState({ items: arrayAisle })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state &&
                    this.state.items.map((aisle, index) => {
                        if (aisle.length) {
                            return <Aisle aisle={aisle} key={index} />
                        }
                    })}
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
