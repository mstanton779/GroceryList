import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    Alert,
} from 'react-native'
import { Toast } from 'native-base'
import axios from 'axios'
import Confetti from 'react-native-confetti'
import Search from '../components/Search'
const SERVER_URL = 'http://10.0.0.133:8080'

export default class AddItem extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            error: false,
            searchResults: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    async handleSubmit() {
        try {
            // this.setState({ name: this.state.name.toLowerCase() })
            const data = await axios.post(`${SERVER_URL}/api/list`, this.state)
            console.log('message', data)
            if (data === 'Nope') {
                Toast.show({
                    type: 'danger',
                    duration: 3000,
                    text: `Error! Could not find ${this.state.name}`,
                    position: 'bottom',
                })
            }
            console.log(this.state)
        } catch (err) {
            console.log(err)
            Toast.show({
                type: 'danger',
                text: `${this.state.name[0].toUpperCase()}${this.state.name.slice(
                    1
                )} was not found ${err.message}`,
                duration: 3000,
                position: 'bottom',
            })
        }
    }
    async handleChange(event) {
        try {
            const { text } = event.nativeEvent
            if (text === '') {
                const shorterSearch = this.state.name.slice(
                    0,
                    this.state.name.length - 1
                )
                this.setState(
                    { ...this.state, name: shorterSearch },
                    this.searchHelper
                )
            } else {
                const search = text
                this.setState(
                    {
                        ...this.state,
                        name: search,
                    },
                    this.searchHelper
                )
            }
        } catch (err) {
            console.log(err)
        }
    }
    async searchHelper() {
        try {
            const { data } = await axios.get(
                `${SERVER_URL}/api/list/search?search=${this.state.name}`
            )
            this.setState({ ...this.state, searchResults: data })
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
                    onChange={this.handleChange}
                    value={this.state.name}
                    name="name"
                />
                {/* <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight> */}
                {this.state.searchResults.map(result => {
                    return <Search key={result.id} result={result} />
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
