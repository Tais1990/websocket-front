
export default function Message({ id, text, onDelete }) {
    return (
        <div className="message">
            <div className="message__text">{text}</div>
            <button onClick={() => {
                onDelete(id)
            }}>Удалить</button>
        </div>
    )
}