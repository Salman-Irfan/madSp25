import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/slices/counterSlice'

const Global = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <View style={{backgroundColor:"white"}}>
            <Text>Global</Text>
            <Button title='Increment' onPress={() => dispatch(increment())} />
            <Button title='Decrement' onPress={() => dispatch(decrement())} />
            <Text>{count}</Text>
        </View>
    )
}

export default Global

const styles = StyleSheet.create({})