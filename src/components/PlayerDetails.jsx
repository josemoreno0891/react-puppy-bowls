export function PlayerDetails({player}){
    return (
        <dialog open={player.id}>
            <h1>{player.name}</h1>
            <h3>{player.breed}</h3>
            <img src={player.imageUrl} width={200} height={150}/>
        </dialog>
    );
}