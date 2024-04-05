import { useState } from "react";

export default function NewMessage({ onSend }) {
    const [value, setValue] = useState('') 
    return (
        <div className="new-message">
            <input type="text" value={value} onChange={(event) => { setValue(event.target.value) }}/>
            <button onClick={() => {
                onSend({text: value})
                setValue('')
            }}>Отправить</button>
        </div>
    )
}