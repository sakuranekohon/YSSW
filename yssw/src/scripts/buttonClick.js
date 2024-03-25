import axios from "axios";
import ScoreWin from "@/components/ScoreWin";

export default function buttonClick() {
    const studentID = document.getElementById("studentID").value;
    const password = document.getElementById("password").value;

    const params = {
        searchStudentID: studentID,
        password: password
    };

    console.log(studentID);
    axios.get("./api/getscore", { params })
        .then((response) => {
            if (response.data.success)
                renderScores(response.data.data);
            else {
                console.log("AAA");
                document.getElementById("totalScore").childNodes[1].childNodes[0].innerText = "Not Find";
                document.getElementById("prValue").childNodes[1].childNodes[0].innerText = 0 + "%";
            }


        })
        .catch((error) => console.error(error));
}

function renderScores(score) {
    //console.log(score);
    document.getElementById("totalScore").childNodes[1].childNodes[0].innerText = score.studentData[3];

    const allscoreContainer = document.getElementById("allscore");
    //console.log("allscoreContainer:", allscoreContainer);

    for (let i = 0; i < score.title.length - 1; i++) {
        const newScoreWin = <ScoreWin key={i} title={score.title[i]} value={score.studentData[i]} />;
        allscoreContainer.appendChild(newScoreWin);
    }
}