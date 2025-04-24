import React from "react";
import { View, Text, Button } from "react-native"; 

export default function Inicial() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Menu que contém informações</Text>         
            <Button title="Ir para a timeline" onPress={() => navigation.navigate("Home")} />

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