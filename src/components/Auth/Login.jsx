import { LogIn } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Your Email ${email}, And Your Password ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flexGrp w-screen h-screen">
      <div className="p-20 rounded-3xl border border-blue-700 shadow-[0px_0px_28px_-3px_rgba(20,_71,_230,_0.75)]">
        <h1 className="text-5xl font-bold mb-1">Login</h1>
        <p className="mb-10">Enter Your Details</p>
        <form onSubmit={submitHandler} className="flexGrp flex-col">
          <input
            className="login-input mb-3"
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />

          <input
            className="login-input mb-6"
            type="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 h-12 w-full rounded-full text-[18px] flexGrp"
          >
            <span className="mr-2">Login</span> <LogIn size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
