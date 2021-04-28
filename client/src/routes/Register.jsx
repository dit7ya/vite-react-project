import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom"
import { handleRegister } from "../apicalls.js"


const Register = () => {

    const [submitted, setSubmitted] = useState(false);


    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values) => {
            // console.log("values are", values);
            try {
                const result = await handleRegister(values)
                setSubmitted(true)
            } catch {
                alert("Username already taken.");
            }
        },
    });

    let content
    if (submitted) {
        content =
            (<div className="sm:w-1/2 m-auto rounded rounded bg-purple-100 p-4 shadow-lg ">
                <h1>You have successfully registered.</h1>
                {/* <button className="mt-4 pl-2 pr-2 rounded bg-purple-300">Logout</button> */}
                <button className="pl-2 pr-2 mt-4 rounded bg-purple-300" type="submit">

                    <Link to="/login">Login</Link>
                </button>

            </div>)
    } else {
        content =
            (<form
                onSubmit={formik.handleSubmit}
                className="sm:w-1/2 m-auto rounded bg-purple-100 p-4 shadow-lg"
            >
                <div>
                    <label htmlFor="username" className="text-sm">
                        Username
        </label>
                    <div className="border rounded">
                        <input
                            id="username"
                            placeholder="Enter username..."
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

                            placeholder="Enter password..."
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
                        Sign up
        </button>
                </div>
            </form>)
    }
    return (

        <div className="flex items-center" >
            {content}
        </div >

    )

};

export default Register;

