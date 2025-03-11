import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
import UserNames from '../../components/lists/UserNames'

const Stylings = () => {
    const users = [
        { id: 1, name: `ali` },
        { id: 2, name: `ahmad` },
        { id: 3, name: `atif` },
        { id: 4, name: `faizan` },
        { id: 5, name: `haris` },
    ]
    return (
        <View style={{ backgroundColor: "white" }}>
            <Text>Stylings</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserNames item={item} />}
                keyExtractor={(item)=>{item.id}}
            />
        </View>
    )
}

export default Stylings

const styles = StyleSheet.create({})