import { StatusBar } from 'expo-status-bar';
import {useEffect, useState} from "react";
import {View} from "react-native";
import HomePage from "./src/pages/homePage";
import PageSelector from "./src/PathSelector";

export default function App() {
    const [page, setPage] = useState("home");

    const changePage = (page) => {
        setPage(page);
    }

    return (
    <View>
      {PageSelector(page, changePage)}
      <StatusBar style="auto" />
    </View>
  );
}
