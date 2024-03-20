import style from "../../public/styles/score.module.css"

export default function ScoreWin({title,value}){
    return(
        <div className={style.scorewin}>
            <div className={style.scoretitle}>
                <span>{title}</span>
            </div>
            <div className={style.scorevalue}>
                <span>{value}</span>
            </div>
        </div>
    );
}