import { useState } from "react";
import api from "../Services/api";

function GenerateEmail() {
    const [topic, setTopic] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        if (!topic.trim()) {
            alert("please enter a topic");
            return;
        }
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            const response = await api.post(
                "/email/generate-email",
                { topic },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setEmail(response.data.email.generatedEmail);
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Failed to generate Email");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1>Generate Email</h1>
            <textarea
                placeholder="Enter your Email topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />
            <br />
            <button onClick={handleGenerate} disabled={loading}>
                {loading ? "Generating..." : "Generate Email"}
            </button>
            {email && (
                <div>
                    <h2>Generated Email</h2>
                    <pre>{email}</pre>
                    <button onClick={() => navigator.clipboard.writeText(email)}>
                        Copy Email
                    </button>
                </div>
            )}
        </>
    );
}

export default GenerateEmail;