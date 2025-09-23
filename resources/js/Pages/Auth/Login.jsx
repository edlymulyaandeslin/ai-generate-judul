import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="Log in" />

            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-100 dark:from-gray-900 dark:to-gray-800">
                <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl dark:bg-gray-900 relative">
                    {/* Logo Text / Back to Home */}
                    <div className="flex justify-center mb-4">
                        <Link
                            href="/"
                            className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-sky-500 to-blue-600 bg-clip-text text-transparent"
                        >
                            Lyn
                            <span className="text-gray-800 dark:text-gray-200">
                                Joki
                            </span>
                        </Link>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center text-indigo-500">
                        Welcome Back
                    </h2>
                    <p className="mt-2 mb-6 text-sm text-center text-gray-600 dark:text-gray-400">
                        Sign in to continue to your dashboard
                    </p>

                    {/* Status */}
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full mt-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition text-center"
                            disabled={processing}
                        >
                            {processing ? "Logging in..." : "Log in"}
                        </Button>
                    </form>

                    {/* Footer */}
                    <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
                        Don’t have an account?{" "}
                        <Link
                            href={route("register")}
                            className="font-medium text-indigo-500 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
