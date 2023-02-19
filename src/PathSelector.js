import HomePage from "./pages/homePage";
import ProgramsList from "./programs/programs";
import React from "react";
import {Text, View} from "react-native";
import ProgramPage from "./pages/programPage";

const PageSelector = (page, pageSetter) => {
    if (page === 'home') {
        return <HomePage pageSetter={pageSetter}/>;
    }
    for (const program of ProgramsList.full) {
        if (program.uid === page) {
            return <ProgramPage pageSetter={pageSetter} program={program}/>;
        }
    }
    return <View> <Text>Page not found.</Text> </View>;
}

export default PageSelector;