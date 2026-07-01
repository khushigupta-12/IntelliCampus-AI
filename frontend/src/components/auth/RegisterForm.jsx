import { useState } from "react";
import api from "../../services/api";

function RegisterForm() {

    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
        role: "student"
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post("/auth/register", form);

            alert(res.data.message);

        } catch (err) {

            alert(err.response.data.detail);

        }

    };

    return (

        <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow-lg">

            <h1 className="text-3xl font-bold mb-6">
                Register
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    className="border p-3 w-full rounded"
                    placeholder="Full Name"
                    name="fullname"
                    onChange={handleChange}
                />

                <input
                    className="border p-3 w-full rounded"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                />

                <input
                    className="border p-3 w-full rounded"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                />

                <select
                    className="border p-3 w-full rounded"
                    name="role"
                    onChange={handleChange}
                >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                    <option value="admin">Admin</option>
                </select>

                <button
                    className="bg-blue-600 text-white w-full p-3 rounded hover:bg-blue-700"
                >
                    Register
                </button>

            </form>

        </div>

    );

}

export default RegisterForm;