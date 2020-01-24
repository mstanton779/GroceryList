import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native'
import axios from 'axios'
import Confetti from 'react-native-confetti'
const SERVER_URL = 'http://10.0.0.133:8080'

export default class AddItem extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async handleSubmit() {
        try {
            console.log('in hand')
            const { data } = await axios.post(
                `${SERVER_URL}/api/products`,
                this.state
            )
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Add Item</Text>
                <TextInput
                    style={styles.itemInput}
                    onChangeText={name =>
                        this.setState({ ...this.state, name })
                    }
                    name="name"
                />
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#6565fc',
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white',
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center',
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
})
