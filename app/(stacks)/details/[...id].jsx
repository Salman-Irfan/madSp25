import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetailId = () => {
    console.log(useLocalSearchParams())
    const {id} = useLocalSearchParams()
    console.log(id)
    return (
        <View style={{backgroundColor: "white"}}>
            <Text>DetailId</Text>
        </View>
    )
}

export default DetailId

const styles = StyleSheet.create({})