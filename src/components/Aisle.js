import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Aisle = props => {
    return (
        <View style={styles.itemsList}>
            <Text style={styles.itemtext}>Aisle {props.aisle[0].aisle}</Text>
            <Text>
                {props.aisle.map(product => {
                    return (
                        <Text key={product.id} style={styles.itemtext}>
                            {product.product}
                        </Text>
                    )
                })}
            </Text>
        </View>
    )
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
export default Aisle
