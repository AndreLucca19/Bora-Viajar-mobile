// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Cadastro = () => {
//     const [nome, setNome] = useState('');
//     const [email, setEmail] = useState('');
//     const [senha, setSenha] = useState('');
//     const navigation = useNavigation();

//     const handleCadastro = () => {

//         console.log('Nome:', nome);
//         console.log('Email:', email);
//         console.log('Senha:', senha);

//         navigation.navigate('Login');
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Cadastre-se</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Nome"
//                 value={nome}
//                 onChangeText={setNome}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Senha"
//                 value={senha}
//                 onChangeText={setSenha}
//                 secureTextEntry
//             />
//             <TouchableOpacity style={styles.button} onPress={handleCadastro}>
//                 <Text style={styles.buttonText}>Cadastrar-se</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//         backgroundColor: '#fff',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     input: {
//         width: '100%',
//         height: 50,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 15,
//     },
//     button: {
//         width: '100%',
//         height: 50,
//         backgroundColor: '#007BFF',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default Cadastro;
