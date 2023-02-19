import React, {useState} from "react";
import {Button, FlatList, ScrollView, SectionList, Text, View} from "react-native";

const ExerciceHomePage = (data) => {
    console.log(data.program.exercises)
    return (
        <View>
            <Text>{data.program.name}</Text>
            <FlatList data={data.program.exercises}
                     renderItem={({item}) => <Text>* {item.name}</Text>}
                     keyExtractor={item => `basicListEntry-${item.name}`}/>
            <Button title={"Start"} onPress={() => {data.pageSetter("program")}}/>
        </View>
    );
}
export default ExerciceHomePage;