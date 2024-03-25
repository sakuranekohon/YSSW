import Header from "@/components/Header";
import Bar from "@/components/Bar";
import Footer from "@/components/Footer";
import style from "../../public/styles/style.module.css"
import ScoreWin from "@/components/ScoreWin";
import buttonClick from "@/scripts/buttonClick";

export default function Home() {
    return (
        <>
            <Header title="HomePage" />
            <Bar path="/" />
            <div className={style.container}>
                <div className={style.search}>
                    <input type="text" id="studentID" placeholder="請輸入學號" />
                    <input type="text" id="password" placeholder="請輸入密碼" />
                    <button type="button" onClick={buttonClick}>查詢成績</button>
                </div>
                <div className={style.allscore} id="allscore">
                    
                </div>
                <div className={style.avePR}>
                    <ScoreWin title="總成績" value="60" id="totalScore"/>
                    <ScoreWin title="PR值" value="60" id="prValue"/>
                </div>
            </div>
            <Footer />
        </>
    );
}