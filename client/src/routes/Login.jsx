import React, { useContext } from "react";
import { useFormik } from "formik";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import { handleLogin } from "../apicalls.js"

const Login = () => {
    const { user, setUser } = useContext(UserContext);

    // Dont show login if already logged in
    //
    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setUser(null);
        // window.location.reload()
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values) => {
            // console.log("values are", values);
            try {
                const result = await handleLogin(values)
                console.log(result)
                const token = result.data;
                // console.log(token);
                if (token) {
                    setUser({ username: values.username, token: token });
                    window.localStorage.setItem("token", token);
                }
            } catch {
                alert("Username or Password Incorrct.");
            }
        },
    });

    const token = window.localStorage.getItem("token");

    if (token) {
        return (
            <div className="sm:w-1/2 m-auto rounded bg-purple-100 p-4 mt-10 ">
                <h1>You have successfully logged in.</h1>
                <button
                    className="mt-4 pl-2 pr-2 rounded bg-purple-300"
                    onClick={handleLogout}
                >
                    Logout
        </button>
            </div>
        );
    }

    return (
        <div className="flex items-center min-h-screen">
            <div className="sm:w-1/2 m-auto ">
                <form
                    className="rounded bg-purple-100 p-4 shadow-lg"
                    onSubmit={formik.handleSubmit}
                >
                    <div>
                        <label htmlFor="username" className="text-sm">
                            Username
            </label>
                        <div className="border rounded">
                            <input
                                id="username"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                className="rounded w-full pl-2 pr-2"
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password" className="text-sm">
                            Password
            </label>
                        <div className="border rounded">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className="rounded w-full pl-2 pr-2"
                            />
                        </div>
                    </div>
                    <div className="pt-4 self-end flex justify-end">
                        <button className="pl-2 pr-2 rounded bg-purple-300" type="submit">
                            Login{" "}
                        </button>
                    </div>
                </form>

                <div className="shadow-lg mt-5 text-blue-800 text-sm flex justify-center pt-2 pb-2 border-2 bg-gray-200 rounded ">
                    <Link to="/register"> New to this site? Sign up here first.</Link>
                </div>
            </div>
        </div>
    );
};
export default Login;
