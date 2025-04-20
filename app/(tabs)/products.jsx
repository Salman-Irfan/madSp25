import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebaseConfig'
import ProductItem from '@/components/products/ProductItem'
import { useFocusEffect, useRouter } from 'expo-router'

const Products = () => {
    const router = useRouter()
    const [products, setProducts] = useState([]);
    
    const fetchAllProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));

        const productsArray = [];

        querySnapshot.forEach((doc) => {
            productsArray.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsArray);
    }
    useEffect(() => {
        fetchAllProducts()
    }, [])

    useFocusEffect(
        useCallback(() => {
            fetchAllProducts();
        }, [])
    );


    const handleProductPress = (productId) => {
        router.push(`/productDetails/?productId=${productId}`)
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View>
                <Text>Products</Text>
                {/* use flatlist to display array of objects */}
                <FlatList
                    data={products}
                    renderItem={({ item }) => <ProductItem product={item} onPress={handleProductPress} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

export default Products

const styles = StyleSheet.create({})