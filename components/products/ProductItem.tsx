import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductItem = ({ product, onPress }: any) => {

    return (
        <SafeAreaView>
            <Pressable onPress={() => onPress(product.id)}>
                <View>
                    <Text>ProductItem</Text>
                    <Text>{product.id}</Text>
                    <Text>{product.title}</Text>
                    <Text>{product.price}</Text>
                    <Text>{product.description}</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )
}

export default ProductItem

const styles = StyleSheet.create({})