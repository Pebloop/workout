import endurance1 from "./endurance/endurance1";
import endurance2 from "./endurance/endurance2";
import muscuBras from "./muscu/muscuBras";
import muscuJambes from "./muscu/muscuJambes";

const EnduranceProgramsList = [
    endurance1,
    endurance2
]

const MuscuProgramsList = [
    muscuBras,
    muscuJambes
]

const fullProgramsList = [
    ...EnduranceProgramsList,
    ...MuscuProgramsList
]

const ProgramsList = {
    endurance: EnduranceProgramsList,
    muscu: MuscuProgramsList,
    full: fullProgramsList
}
export default ProgramsList;