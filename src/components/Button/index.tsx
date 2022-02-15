interface IButtonProps {
    text: string;
    onClick: () => void;
}

export function Button({text, onClick}: IButtonProps): JSX.Element {
    return (
        <button
            onClick={onClick}
            type="button"
            className={"font-bold uppercase bg-yellow-500 border-2 border-yellow-500 " +
            " px-8 py-2 rounded hover:bg-yellow-600 hover:border-yellow-600"}>
            {text}
        </button>
    );
}
