import React from 'react'
import { ListItem, Icon, Button, Toast } from 'native-base'
import { Text, View } from 'react-native'
import axios from 'axios'
const SERVER_URL = 'http://10.0.0.133:8080'
class SingleItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { deleted: false, product: {} }
    }
    // componentDidMount() {
    //     this.setState({ ...this.state, product: this.props.product })
    //     console.log('single', this.state)
    // }
    async handlePress(itemId) {
        try {
            const { data } = await axios.delete(
                `${SERVER_URL}/api/list/${itemId}`
            )
            if (data === 'OK') {
                this.setState({ ...this.state, deleted: true })
                Toast.show({
                    text: 'Item deleted',
                    duration: 3000,
                    position: 'bottom',
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        const { product, something } = this.props
        if (!this.state.deleted) {
            return (
                <ListItem
                    key={product.id}
                    style={{ justifyContent: 'space-between' }}
                >
                    <Text>
                        {product &&
                            `${product.product[0].toUpperCase()}${product.product.slice(
                                1
                            )}`}
                    </Text>

                    <Button
                        transparent
                        key={product.id}
                        onPress={() => this.handlePress(something)}
                        value={this.props.something}
                    >
                        <Icon
                            name="trash"
                            style={{ color: 'blue', fontSize: 23 }}
                            value={product.id}
                        />
                    </Button>
                </ListItem>
            )
        } else {
            return <View />
        }
    }
}

export default SingleItem
