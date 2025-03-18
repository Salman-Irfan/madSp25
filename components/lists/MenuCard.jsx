import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const MenuCard = ({ item }) => {
    return (
        <View>
            <Link href={`/details/${item.id}/${item.dish}`}>
                <Text>{item.id}</Text>
                <Text>{item.dish}</Text>
            </Link>
        </View>
    )
}

export default MenuCard

const styles = StyleSheet.create({})