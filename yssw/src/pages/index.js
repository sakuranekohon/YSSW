import Header from "@/components/Header";
import Bar from "@/components/Bar";
import Footer from "@/components/Footer";
import style from "../../public/styles/style.module.css"

export default function Home() {
    return (
        <>
            <Header title="HomePage" />
            <Bar path="/"/>
            <div className={style.container}>
                <div className={style.search}>
                    <input type="text" id="studentID" placeholder="請輸入學號" />
                    <input type="text" id="password" placeholder="請輸入密碼" />
                    <button type="button">查詢成績</button>
                </div>
                <div>
                    <span>AAA</span>
                </div>
                <div>
                    <span>BBB</span>
                </div>
            </div>
            <Footer />
        </>
    );
}