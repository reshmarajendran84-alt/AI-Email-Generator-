import { useState } from "react";
import api from "../Services/api";

function Dashboard() {
    const [topic, setTopic] = useState("");

    
    return (
        <>
            <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />
           
        </>
    );
}

export default Dashboard;