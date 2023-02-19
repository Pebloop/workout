import {createProgram} from "../program";
import {createExercice} from "../exercice";

const endurance1 = createProgram(
    "ENDURANCE_1",
    "Endurance 1",
    [
        createExercice("test", "test", "test", null),
        createExercice("test2", "test", "test", null)
    ]);
export default endurance1;