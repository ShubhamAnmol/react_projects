import { useContext, useState } from "react"
import UserContext from "../context/UserContext"

export default function Login() {
    const { user, setUser } = useContext(UserContext)
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(text);
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 items-center justify-center mb-20">
            <input
                type="text"
                value={text || ""}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text..."
                className="bg-white rounded border-2 border-gray-400 p-2 w-64"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    )
}