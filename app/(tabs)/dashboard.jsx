import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OWNER_NAME } from '../../constants/owner'
import { ownerStyles } from '../../styles/ownerStyles'

const Dashboard = () => {
    const [name, setName] = useState(``)
    // java script 
    console.log(`first`)
    let abc = 123
    console.log(abc)
    const sum = (n1, n2) => {
        return (n1 + n2)
    }
    let ans = sum(2, 3)
    console.log(ans)
    // for in loop, for of loop, for loop, for each loop
    const appFeatures = ["clock", "translation", "notifications", "alarms"]
    for (let i = 0; i < appFeatures.length; i++) {
        console.log(appFeatures[i])
    }
    for (let i in appFeatures) {
        console.log(appFeatures[i])
    }
    for (let name of appFeatures) {
        console.log(name)
    }
    const lawyersFees = [500, 100, 400, 600, 800]
    lawyersFees.forEach((i) => {
        console.log(i)
        console.log(i * 2)
    })

    const doubleFees = lawyersFees.map((i) => {
        if (i === 400) {
            return (i * 2)
        }
    })

    console.log(doubleFees)

    const handleNameChange = (text) => {
        setName(text)
    }

    return (
        <SafeAreaView>
            <View style={[styles.textBox, styles.bgRed]}>
                <Text style={ownerStyles.box}> {OWNER_NAME} </Text>
                <Text >Dashboard</Text>
                <Text>Your Name is: {name} </Text>
                <Text>{ans}</Text>
                {/* textinput */}
                <TextInput 
                    style={styles.textInput}
                    placeholder='Enter Name'
                    value={name}
                    onChangeText={(text)=>handleNameChange(text)}
                />
            </View>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    textBox: {
        fontSize: 12,
        height: "100px",
        // margin: 5,
        borderRadius: 5,
        textAlign: "center",
        textAlignVertical: "center",
        textDecorationColor: "green",
    },
    bgRed: {
        backgroundColor: "white"
    },
    textInput: {
        fontSize: 18,
        color: "red",
        borderWidth: 2,
        borderColor: "green",
        margin: "40",
        padding: 4,
    }
})