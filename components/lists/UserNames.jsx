import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserNames = ({item}) => {
    return (
        <View>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
        </View>
    )
}

export default UserNames

const styles = StyleSheet.create({})