import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from 'react-native'
import { useState } from 'react'
import { TextInput } from 'react-native'
import axios from 'axios'


const States = () => {
    const [count, setCount] = useState(5)
    const [btn1, setBtn1] = useState(1)
    const [btn2, setBtn2] = useState(2)
    const [btn3, setBtn3] = useState(3)
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        age: 0,
        password: "",
    })
    const handleIncrementCounter = () => {
        setCount(count + 1)
    }
    const handleDecrementCounter = () => {
        setCount(count - 1)
    }
    // use effect
    useEffect(() => {
        console.log(`component did mount called, component screen py nazar any lga`)
        console.log(`component did mount called, component screen py nazar any lga`)
        console.log(`component did mount called, component screen py nazar any lga`)
        console.log(`component did mount called, component screen py nazar any lga`)
    }, [btn1, btn3])

    const fetchApiData = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`) // promise
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        // http network request to another app
        fetchApiData()
    }, [])


    return (
        <View style={{ backgroundColor: "white" }}>
            <Text>States</Text>
            <Text>{count}</Text>
            <Button title='increment' onPress={handleIncrementCounter} />
            <Button title='Decrement' onPress={handleDecrementCounter} />
            <Button title='Reset' onPress={() => setCount(0)} />
            <Button title="btn1" onPress={() => setBtn1(btn1 + 1)} />
            <Button title="btn2" onPress={() => setBtn2(btn2 + 1)} />
            <Button title="btn3" onPress={() => setBtn3(btn3 + 1)} />

            <TextInput
                placeholder='enter name'
                value={formValue.name}
                onChangeText={(text) => setFormValue(text)}
            />
            <TextInput
                placeholder='enter email'
                value={formValue.email}
                onChangeText={(text) => setFormValue(text)}
            />
            <TextInput
                placeholder='enter age'
                value={formValue.age}
                onChangeText={(text) => setFormValue(text)}
            />
            <TextInput
                placeholder='enter password'
                value={formValue.password}
                onChangeText={(text) => setFormValue(text)}
            />

        </View>
    )
}

export default States

const styles = StyleSheet.create({})