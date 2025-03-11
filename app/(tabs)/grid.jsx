import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Grid = () => {
    return (
        <View style={{ backgroundColor: "white" }}>
            <Text>Flex / Grid Layout</Text>
            <View style={styles.gridLayout}>
                <Text style={styles.item} >Ahmad Hassan </Text>
                <Text style={styles.item} >Atif Raza</Text>
                <Text style={styles.item} >Faizan Younas</Text>
                <Text style={styles.item} >Haris Lutaf</Text>
                <Text style={styles.item} >Ahmad Faraz</Text>
                <Text style={styles.item} >Atif Raza</Text>
                <Text style={styles.item} >Faizan Younas</Text>
                <Text style={styles.item} >Haris Lutaf</Text>
                <Text style={styles.item} >Ahmad Hassan </Text>
                <Text style={styles.item} >Atif Raza</Text>
                <Text style={styles.item} >Faizan Younas</Text>
                <Text style={styles.item} >Haris Lutaf</Text>
                <Text style={styles.item} >Ahmad Faraz</Text>
                <Text style={styles.item} >Atif Raza</Text>
                <Text style={styles.item} >Faizan Younas</Text>
                <Text style={styles.item} >Haris Lutaf</Text>
                <Text style={styles.item} >Ahmad Hassan </Text>
                <Text style={styles.item} >Atif Raza</Text>
                <Text style={styles.item} >Faizan Younas</Text>
                <Text style={styles.item} >Haris Lutaf</Text>
                <Text style={styles.item} >Ahmad Faraz</Text>
                <Text style={styles.item} >Atif Raza</Text>
                <Text style={styles.item} >Faizan Younas</Text>
                <Text style={styles.item} >Haris Lutaf</Text>
                <Text style={styles.item} >Ahmad Hassan </Text>
                <Text style={styles.item} >Atif Raza</Text>
                <Text style={styles.item} >Faizan Younas</Text>
                <Text style={styles.item} >Haris Lutaf</Text>
                <Text style={styles.item} >Ahmad Faraz</Text>
                <Text style={styles.item} >Atif Raza</Text>
                <Text style={styles.item} >Faizan Younas</Text>
                <Text style={styles.item} >Haris Lutaf</Text>
                <Text style={styles.item} >Atif Raza</Text>
                <Text style={styles.item} >Faizan Younas</Text>
                <Text style={styles.item} >Haris Lutaf</Text>
            </View>
        </View>
    )
}

export default Grid

const styles = StyleSheet.create({
    gridLayout:{
        display: 'flex',
        flexDirection: "row",
        backgroundColor: "green",
        flexWrap: "wrap",
        // display: 'flex',
        // backgroundColor: "green",
        margin: 2,
        padding: 2,
        // flexDirection: "row",
        // flexWrap: "wrap",
    },
    item: {
        backgroundColor: "red",
        margin: 3,
        padding: 3,
        width: 200,
        textAlign: "center",
    }
})