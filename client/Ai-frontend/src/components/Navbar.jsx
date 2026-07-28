import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Menu, X, Sparkles } from "lucide-react";

function Navbar() {
    const { token } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                <Link to="/" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                        <Sparkles size={18} />
                    </div>

                    <span className="text-lg font-bold text-gray-900">
                        AI<span className="text-indigo-600">Mailer</span>
                    </span>
                </Link>

                {/* Desktop */}
                <div className="hidden items-center gap-1 md:flex">
                    <Link
                        to="/"
                        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
                    >
                        Home
                    </Link>

                    {token ? (
                        <>
                            <Link
                                to="/dashboard"
                                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
                            >
                                Dashboard
                            </Link>

                            <Link
                                to="/generateEmail"
                                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
                            >
                                Generate
                            </Link>

                            <Link
                                to="/history"
                                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
                            >
                                History
                            </Link>

                            <Link
                                to="/logout"
                                className="ml-3 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                            >
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="ml-2 rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
                    <div className="flex flex-col gap-2">
                        <Link
                            to="/"
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Home
                        </Link>

                        {token ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    to="/generateEmail"
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50"
                                >
                                    Generate
                                </Link>

                                <Link
                                    to="/history"
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-indigo-50"
                                >
                                    History
                                </Link>

                                <Link
                                    to="/logout"
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white"
                                >
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;