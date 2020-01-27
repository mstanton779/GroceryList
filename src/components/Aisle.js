import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List } from 'native-base'
import SingleItem from './SingleItem'

class Aisle extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.itemsList}>
                <Text style={styles.itemtext}>
                    Aisle {this.props.aisle[0].aisle}
                </Text>
                <List>
                    {this.props.aisle.map(product => {
                        return (
                            <SingleItem
                                key={product.id}
                                product={product}
                                something={product.id}
                            />
                        )
                    })}
                </List>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    itemtext: {
        fontSize: 24,
        textAlign: 'center',
    },
})
export default Aisle
