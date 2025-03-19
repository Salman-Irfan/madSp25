import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Manufacturer from '../../components/views/stylingViews/Manufacturer'
import Man1 from '../../components/views/stylingViews/Man1'
import Man2 from '../../components/views/stylingViews/Man2'
import Man3 from '../../components/views/stylingViews/Man3'

const Stylings = () => {
    return (
        <View style={{ backgroundColor: "white" }}>
            <Text>Stylings</Text>
            <Manufacturer make="honda" model="city" variant="2020" />
            <Manufacturer make="toyota" model="city" variant="2020" />
            <Manufacturer make="suzuki" model="city" variant="2020" />
            
            <View style={{backgroundColor: "blue"}}>
                <Man1 />
                <Man1 />
                <Man2 />
                <Man3 />
            </View>
        </View>
    )
}

export default Stylings

const styles = StyleSheet.create({})