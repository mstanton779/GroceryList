import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class ItemComponent extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
    }

    render() {
        return (
            <View style={styles.itemsList}>
                {this.props.items.map(item => {
                    return (
                        <View key={item.id}>
                            <Text style={styles.itemtext}>
                                Aisle {item.aisle}{' '}
                                {`${item.product[0].toUpperCase()}${item.product.slice(
                                    1
                                )}`}
                            </Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
