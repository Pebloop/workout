import React from "react";
import {Text} from "react-native";

export const createProgram = (uid, name, exercises) => {
    return {
        uid,
        name,
        exercises,
    };
}