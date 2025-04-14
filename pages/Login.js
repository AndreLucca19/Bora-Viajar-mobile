import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Login({ navigation }) {
    return (
            <View style={styles.container}>
                <View style={styles.loginBox}>
                    <Text style={styles.title}>Bem Vindo!</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome ou email"
                        placeholderTextColor="#aaa"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.buttonText}>ENTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <Text style={styles.linkText}>Não tem uma conta? Crie já</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#87CEEB", 
    },
    loginBox: {
        width: "90%",
        padding: 20,
        backgroundColor: "rgba(255, 255, 255, 0.8)", 
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#00C4B4",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    linkText: {
        marginTop: 15,
        color: "#007BFF",
        fontSize: 14,
        textDecorationLine: "underline",
    },
});