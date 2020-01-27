import React from 'react'
import { View, Text } from 'react-native'
import { ListItem, Toast } from 'native-base'
import Axios from 'axios'
const SERVER_URL = 'http://10.0.0.133:8080'
export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResult: {},
            error: false,
            toast: false,
        }
        this.handlePress = this.handlePress.bind(this)
    }
    componentDidMount() {
        this.setState({ ...this.state, searchResult: this.props.result })
    }
    async handlePress() {
        try {
            const { message, data } = await Axios.post(
                `${SERVER_URL}/api/list`,
                this.state.searchResult
            )
            if (message === 'Nope') {
                Toast.show({
                    text: `Error! Could not find ${this.state.searchResult.name}`,
                })
            } else {
                Toast.show({
                    text: `${data.product[0].toUpperCase()}${data.product.slice(
                        1
                    )} added to Grocery List`,
                    duration: 3000,
                    position: 'bottom',
                })
            }
        } catch (err) {
            console.log(err)
            Toast.show({
                text: err.message,
                duration: 3000,
                position: 'bottom',
            })
        }
    }
    render() {
        return (
            <View>
                <ListItem onPress={this.handlePress}>
                    {this.state.searchResult ? (
                        <Text>
                            {this.state.searchResult.name &&
                                `${this.state.searchResult.name[0].toUpperCase()}${this.state.searchResult.name.slice(
                                    1
                                )}`}
                        </Text>
                    ) : (
                        ''
                    )}
                </ListItem>
            </View>
        )
    }
}
