import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuCard = ({item}) => {
    return (
        <View>
            <Text>{item.id}</Text>
            <Text>{item.dish}</Text>
        </View>
    )
}

export default MenuCard

const styles = StyleSheet.create({})