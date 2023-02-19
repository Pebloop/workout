import React, {useState} from "react";
import {Button, ScrollView, Text, View} from "react-native";

const ExercicePage = (data) => {
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const exercises = data.program.exercises;

    const changeExercise = () => {
        if (exerciseIndex + 1 < exercises.length) {
            setExerciseIndex(exerciseIndex + 1);
        }
    }

    const nextButton = () => {
        if (exerciseIndex + 1 < exercises.length) {
            return <Button title={"Next"} onPress={changeExercise}/>;
        }
    }

    const previousButton = () => {
        if (exerciseIndex > 0) {
            return <Button title={"Previous"} onPress={() => {setExerciseIndex(exerciseIndex - 1)}}/>;
        }
    }

    const homeButton = () => {
        return <Button title={"Home"} onPress={() => {data.pageSetter("home")}}/>;
    }

    return (
        <View>
            {homeButton()}
            <Text>{exercises[exerciseIndex].name}</Text>
            {previousButton()}
            {nextButton()}
        </View>
    );
}
export default ExercicePage;