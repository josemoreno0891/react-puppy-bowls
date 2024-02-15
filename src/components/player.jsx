export function Player({player, onClick, onDelete}) {
    return (
        <tr key={player.id}>
            <td>{player.name}</td>
            <td>{player.breed}</td>
            <td>
                <button onClick={() => onClick(player.id)}>View player detail</button>
            </td>
            <td>
                <button onClick={() => onDelete(player.id)}>Delete</button>
            </td>
        </tr>
    );
}