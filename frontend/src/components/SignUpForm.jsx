import { useState, useEffect } from "react";
import "../styles/SignUpForm.css";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const CheckUser = async () => {
            try {
                const response = await fetch("/backend/UserApi");

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.text();
                console.log("Raw response:", data);

                if (data.trim()) {
                    const UserAPIjson = JSON.parse(data);
                    console.log(UserAPIjson);
                } else {
                    console.warn("No data received or empty response");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        CheckUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            password
        };

        try {
            const response = await fetch("/backend/UserProfiles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log("User profile submitted successfully");
                navigate("/thanksSignUp")
            } else {
                console.error("Failed to submit user profile");
            }
        } catch (error) {
            console.error("Error submitting user profile:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg animate-fade-in">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-700 animate-slide-down">Sign Up</h2>
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="text-gray-800 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            required
                            autoComplete="name"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-gray-800 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            required
                            autoComplete="username"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-gray-800 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 transition-transform duration-300 transform hover:scale-105"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};
