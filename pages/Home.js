import React from "react";
import { View, SafeAreaView, FlatList, ScrollView, Dimensions } from "react-native";
import Post from "../components/Post";

export default function Home() {
    const posts = [
        { id: "1", photo: "https://i.pinimg.com/736x/3d/9d/e4/3d9de41ce4257e86f18e79b937404cc7.jpg", name: "Laura", image1: "https://i.pinimg.com/736x/f2/bb/33/f2bb33feb2c17a3469acea8b26afe113.jpg", image2: "https://i.pinimg.com/736x/2c/7b/9e/2c7b9e4473cd7fb01b875fffef987c26.jpg", description: "Amo ler sentindo a brisa dessa praia!", tag: "Novidades" },
        { id: "2", photo: "", name: "", image1: "", image2: "", description: "Amo ler sentindo a brisa dessa praia!", tag: "" },
    ];
    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <FlatList
                    style={styles.verticalList}
                    data={posts}
                    vertical
                    showsVerticalScrollIndicator={true}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[{ width: cardWidth }]}>
                            <Post post={item} />
                        </View>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    verticalList: {
        flexGrow: 0,
    },
};