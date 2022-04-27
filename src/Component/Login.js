import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import auth from "../firebase.init";

const Login = () => {
    const navigate=useNavigate()
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);

    const handleLogin=async(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        await signInWithEmailAndPassword(email,password)
    }

    if(user){
        navigate('/')
    }

  return (
    <div className="w-2/5 mx-auto font-serif border rounded-2xl py-5">
      <h1 className="text-center text-2xl text-blue-500 font-bold my-3">
        Please Login
      </h1>
      <form onSubmit={handleLogin} className="w-10/12 mx-auto">
        <input
          className="border p-2 my-3 rounded-lg w-full"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          className="border p-2 my-3 rounded-lg w-full"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <input
          className="bg-blue-600 text-white text-xl font-bold px-8 py-2 rounded-xl"
          type="submit"
          value="Login"
        />
        {(loading) && <p>Loading...</p>}
        {(error) && <p>{error.message}</p>}
      </form>
      <p className="text-xl text-center my-3">
        Don't have an account?
        <span className="text-orange-500">Create an account</span>
      </p>
      <p className="text-xl text-center my-3">
        Forget password? <span className="text-orange-500">Reset Password</span>
      </p>
      <div className="flex items-center mx-8">
        <div className="bg-gray-400 w-1/2 h-[1px]"></div>
        <p className="mx-3">Or</p>
        <div className="bg-gray-400 w-1/2 h-[1px]"></div>
      </div>
      <div className="flex justify-center">
        <button className="border px-16 py-2 my-5 rounded-2xl">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
