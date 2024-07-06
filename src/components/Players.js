

const Player =(props) => {
    return(
        <div className={props.player}>
            <h2>Player {props.player}</h2>
            <h3>Wins:</h3>
        </div>
    )
}

export default Player