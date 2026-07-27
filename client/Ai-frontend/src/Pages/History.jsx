import { useEffect, useState } from "react";
import api from "../Services/api";

function History() {
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [editedEmail, setEditedEmail] = useState("");

    const fetchHistory = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await api.get("/email/history", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setEmails(response.data.emails);
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Failed to load email history");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await api.delete(`/email/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setEmails((current) => current.filter((email) => email._id !== id));
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Failed to delete email");
        }
    };

    const handleUpdate = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const response = await api.put(
                `/email/${id}`,
                { generatedEmail: editedEmail },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setEmails((current) =>
                current.map((email) => (email._id === id ? response.data.email : email))
            );
            setEditingId(null);
            setEditedEmail("");
        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Failed to update email");
        }
    };

    if (loading) return <p>Loading history...</p>;

    return (
        <div>
            <h1>Email History</h1>
            {emails.length === 0 ? (
                <p>No generated emails yet.</p>
            ) : (
                emails.map((email) => (
                    <div key={email._id}>
                        <h3>{email.topic}</h3>
                        {editingId === email._id ? (
                            <textarea
                                value={editedEmail}
                                onChange={(e) => setEditedEmail(e.target.value)}
                            />
                        ) : (
                            <pre>{email.generatedEmail}</pre>
                        )}
                        <button onClick={() => handleDelete(email._id)}>Delete</button>
                        {editingId === email._id ? (
                            <button onClick={() => handleUpdate(email._id)}>Save</button>
                        ) : (
                            <button
                                onClick={() => {
                                    setEditingId(email._id);
                                    setEditedEmail(email.generatedEmail);
                                }}
                            >
                                Edit
                            </button>
                        )}
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default History;