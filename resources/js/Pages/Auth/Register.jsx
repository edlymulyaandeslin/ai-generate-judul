import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <Head title="Register" />

            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-100 dark:from-gray-900 dark:to-gray-800">
                <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl dark:bg-gray-900">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center text-indigo-500">
                        Create Account
                    </h2>
                    <p className="mt-2 mb-6 text-sm text-center text-gray-600 dark:text-gray-400">
                        Register to get started
                    </p>

                    {/* Form */}
                    <form onSubmit={submit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <InputLabel htmlFor="name" value="Full Name" />
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="block w-full mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="block w-full mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                            <Link
                                href={route("login")}
                                className="text-sm font-medium text-indigo-500 hover:underline"
                            >
                                Already registered?
                            </Link>

                            <Button
                                type="submit"
                                className="py-2 px-6 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition"
                                disabled={processing}
                            >
                                {processing ? "Registering..." : "Register"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
