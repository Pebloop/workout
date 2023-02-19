import {ScrollView} from "react-native";
import React, {useState} from "react";
import HomePage from "./homePage";
import ExercicePage from "./ExercicePage";
import ExerciceHomePage from "./ExerciceHomePage";

const PageSelector = (page, pageSetter, program, mainPageSetter) => {
    if (page === 'home') {
        return <ExerciceHomePage pageSetter={pageSetter} program={program}/>;
    }
    if (page === 'program') {
        return <ExercicePage program={program} pageSetter={mainPageSetter}/>;
    }
}

const ProgramPage = (data) => {
    const [page, setPage] = useState("home");

    return (
        <ScrollView>
            {PageSelector(page, setPage, data.program, data.pageSetter)}
        </ScrollView>
    );
}
export default ProgramPage;