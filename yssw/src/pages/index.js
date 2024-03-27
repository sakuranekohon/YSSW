import axios from "axios";
import React, { useState } from "react";
import Header from "@/components/Header";
import Bar from "@/components/Bar";
import Footer from "@/components/Footer";
import style from "../../public/styles/style.module.css";
import ScoreWin from "@/components/ScoreWin";

export default function Home() {
    const [scoreData, setScoreData] = useState(null);

    const handleButtonClick = () => {
        const studentID = document.getElementById("studentID").value;
        const password = document.getElementById("password").value;

        const params = {
            searchStudentID: studentID,
            password: password
        };

        axios.get("./api/getscore", { params })
            .then((response) => {
                if (response.data.success){
                    document.getElementById("totalScore").childNodes[1].childNodes[0].innerText = response.data.data.studentData[3];
                    setScoreData(response.data.data);
                }
                else {
                    console.log("AAA");
                    document.getElementById("totalScore").childNodes[1].childNodes[0].innerText = "Not Find";
                    document.getElementById("prValue").childNodes[1].childNodes[0].innerText = 0 + "%";
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <Header title="HomePage" />
            <Bar path="/" />
            <div className={style.container}>
                <div className={style.search}>
                    <input type="text" id="studentID" placeholder="請輸入學號" />
                    <input type="text" id="password" placeholder="請輸入密碼"  hidden/>
                    <button type="button" onClick={handleButtonClick}>查詢成績</button>
                </div>
                <div className={style.allscore} id="allscore">
                    {scoreData && scoreData.title.slice(0, scoreData.title.length - 1).map((title, index) => (
                        <ScoreWin key={index} title={title} value={scoreData.studentData[index]} />
                    ))}

                </div>
                <div className={style.avePR}>
                    <ScoreWin title="總成績" value="60" id="totalScore" />
                    {/* <ScoreWin title="PR值" value="60" id="prValue"/> */}
                </div>
            </div>
            <Footer />
        </>
    );
}
