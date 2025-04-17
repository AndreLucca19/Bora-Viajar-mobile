import React from "react";
import { View, Text } from "react-native"; 

export default function Filtro () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Menu que contém informações</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(222, 49, 99)",
    },
    title: {
        fontSize: 30,
    },
};