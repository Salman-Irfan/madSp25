import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Authentication from './Authentication'
import SignUp from './SignUp'
import Login from './Login'

const Manufacturer = (props) => {
    console.log(props)
    return (
        <View >
            <Text>Manufacturer</Text>
            <Text>{props.make}</Text>
            <Text>{props.model}</Text>
            <Text>{props.variant}</Text>

            <Authentication>
                <SignUp />
                <Login />
            </Authentication>

        </View>
    )
}

export default Manufacturer

const styles = StyleSheet.create({})