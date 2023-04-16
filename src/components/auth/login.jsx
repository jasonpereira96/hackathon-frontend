// export default function Login() {
//   return <h1>Login page</h1>
// }
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/src/firebase.js";

const LogIn = () => {
  return (
    <div>
      <LoginForm />
      {/* <h1>Signup</h1>
      <SignupForm /> */}
    </div>
  );
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      console.log("User signed in");
    } catch (error) {
      console.log(error);
      // Handle errors (e.g., display error messages)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div class="flex items-center justify-center">
          <h1 class="flex items-center justify-center text-5xl font-extrabold dark:bg-slate-800">
            Hydro
            <span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
              Ponics
            </span>
          </h1>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="px-0 py-3">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="px-0 py-3">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                xmlns=""
              ></svg>
            </span>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
