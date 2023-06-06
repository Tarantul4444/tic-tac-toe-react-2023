const texts = {};
texts[-1] = "Tie";
texts[0] = "Match playing"
texts[2] = "The winner is O"
texts[1] = "The winner is X"

export default function Winner(props) {
    return (
        <div className="m-auto">
            {texts[props.winner]}
        </div>
    );
}