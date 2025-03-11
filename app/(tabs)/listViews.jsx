import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuCard from '../../components/lists/MenuCard'

const ListViews = () => {
    const menuItems = [
        {
            id: 1,
            dish: `chicken`
        },
        {
            id: 2,
            dish: `pasta`
        },
        {
            id: 3,
            dish: `biryani`
        },
        {
            id: 4,
            dish: `pizza`
        },
        {
            id: 5,
            dish: `mutton`
        },
    ]
    return (
        <View style={{ backgroundColor: "white" }}>
            <Text>ListViews</Text>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <MenuCard item={item} />  }
            />
        </View>
    )
}

export default ListViews

const styles = StyleSheet.create({})