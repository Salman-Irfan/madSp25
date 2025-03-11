import React, { useRef } from 'react';
import { View, Text, Button, StyleSheet, DrawerLayoutAndroid } from 'react-native';

const Switch = () => {
    // Reference for DrawerLayoutAndroid
    const drawerRef = useRef(null);

    // Navigation View (Drawer Content)
    const navigationView = (
        <View style={styles.drawerContainer}>
            <Text style={styles.drawerHeader}>News Categories</Text>
            <Button title="Business" onPress={() => alert('Business News')} />
            <Button title="Sports" onPress={() => alert('Sports News')} />
            <Button title="Technology" onPress={() => alert('Technology News')} />
        </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawerRef}
            drawerWidth={250}
            drawerPosition="left"
            renderNavigationView={() => navigationView}
        >
            {/* Main Screen Content */}
            <View style={styles.container}>
                <Button title="Open Drawer" onPress={() => drawerRef.current.openDrawer()} />
                <Text style={styles.contentText}>Welcome to the News Switch!</Text>
            </View>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 18,
        marginTop: 10,
    },
    drawerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    drawerHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Switch;
