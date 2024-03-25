import axios from "axios";
import ScoreWin from "@/components/ScoreWin";

export default function buttonClick(){
    const studentID = document.getElementById("studentID").value;
    const password = document.getElementById("password").value;

    console.log(studentID);
    axios.get("./api/getscore")
    .then((response)=>console.log(response))
    .catch((error)=>console.error(error));
}

function renderScores(score){
    
}