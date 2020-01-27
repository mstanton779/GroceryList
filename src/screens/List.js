import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import axios from 'axios'
import Aisle from '../components/Aisle'
import { Spinner } from 'native-base'
const SERVER_URL = 'http://10.0.0.133:8080'
export default class List extends Component {
    state = {
        items: [],
        isReady: false,
    }
    async componentDidMount() {
        try {
            const { data } = await axios.get(`${SERVER_URL}/api/list`)
            let arrayAisle = []
            for (let i = 1; i < 9; i++) {
                arrayAisle.push(data.filter(item => item.aisle === i))
            }
            this.setState({ ...this.state, items: arrayAisle })
            this.setState({ ...this.state, isReady: true })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        if (!this.state.isReady) {
            return <Spinner color="red" />
        }
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
        justifyContent: 'flex-start',
        backgroundColor: '#ebebeb',
    },
})
