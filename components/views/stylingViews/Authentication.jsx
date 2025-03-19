import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Authentication = ({children}) => {
    // console.log(props)
    // const children = props.children
    // const {children} = props
    // console.log(children)
    console.log(children)

    return (
        <View>
            <Text>Authentication</Text>
            <Text>{children[0]}</Text>
            <Text>Image of a Lock</Text>
            <Text>{children[1]}</Text>
        </View>
    )
}

export default Authentication

const styles = StyleSheet.create({})