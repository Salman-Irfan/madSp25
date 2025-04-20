import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';

const UpdateProduct = () => {
    const router = useRouter(); // Use the useRouter hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { productId } = useLocalSearchParams()
    console.log(productId)

    const fetchProductDetails = async () => {
        try {
            if (typeof productId === 'string') {
                const productDocRef = doc(db, 'products', productId);
                const productDocSnapshot = await getDoc(productDocRef);
                if (productDocSnapshot.exists()) {
                    const data = productDocSnapshot.data();
                    setTitle(data.title);
                    setPrice(data.price);
                    setDescription(data.description);
                } else {
                    console.log('Product not found');
                }
            } else {
                console.log('Invalid productId');
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };
    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    // update product function
    const handleUpdateProduct = async () => {
        try {
            const productDocRef = doc(db, 'products', productId);
            await updateDoc(productDocRef, {
                title,
                price,
                description
            });
            alert('Product updated successfully');
            router.back(); // Navigate back to the previous screen
        } catch (error) {
            console.error('Error updating product:', error);
            Alert.alert('Error', 'Failed to update the product');
        }
    };
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View>
                <Text>Update Product</Text>
            </View>
            <View>
                <TextInput
                    placeholder='Title'
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    placeholder='Price'
                    keyboardType="numeric"
                    value={price}
                    onChangeText={text => setPrice(text)}
                />
                <TextInput
                    placeholder='Description'
                    value={description}
                    onChangeText={setDescription}
                />
                <Button
                    title='Update Product'
                    onPress={handleUpdateProduct}
                />
            </View>
        </SafeAreaView>
    )
}

export default UpdateProduct

const styles = StyleSheet.create({})