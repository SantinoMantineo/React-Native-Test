import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../../data/repositories";

export default function RepositoryList (){
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() =><Text> </Text>}
            renderItem={({item: repo}) =>(
                <View key={repo.id}>
                    <Text>Id: {repo.id}</Text>
                    <Text>Fullname: {repo.fullName}</Text>
                    <Text>Description: {repo.description}</Text>
                    <Text>Language: {repo.language}</Text>
                    <Text>Forks: {repo.forksCount}</Text>
                    <Text>Stars: {repo.stargazersCount}</Text>
                    <Text>Rating: {repo.ratingAverage}</Text>
                </View>
            )}
        >
        </FlatList>
    )
}
