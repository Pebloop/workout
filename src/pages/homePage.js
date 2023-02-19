import {Button, ScrollView, SectionList, StyleSheet, Text, View} from "react-native";
import ProgramsList from "../programs/programs";
import React from "react";

const ExercisesList = (pageSetter) => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    {title: 'Endurance', data: ProgramsList.endurance},
                    {title: 'Muscu', data: ProgramsList.muscu},
                ]}
                renderItem={({item}) => <Button style={styles.item} onPress={() => {pageSetter(item.uid)}} title={item.name}/>}
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item.name}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const HomePage = (data) => {
    return (
        <ScrollView>
            {ExercisesList(data.pageSetter)}
        </ScrollView>
    );
}
export default HomePage;