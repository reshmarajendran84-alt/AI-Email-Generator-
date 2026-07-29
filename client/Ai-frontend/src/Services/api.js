import axios from "axios";

const api = axios.create({
    baseURL: "https://ai-email-generator-ynff.onrender.com/api",
});

export default api;