import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Register = () => {
    const navigate=useNavigate()

    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification :true});

    const [updateProfile, updating, UPerror] = useUpdateProfile(auth);

      const handleRegister= async(e)=>{
          e.preventDefault()
          const name=e.target.name.value
          const email=e.target.email.value
          const password=e.target.password.value
          const confirmPassword=e.target.confirmPassword.value
          if(password===confirmPassword){
             await createUserWithEmailAndPassword(email,password)
             await updateProfile({displayName:name})
             e.target.reset()
          }else{
             alert("password miss match");  
          }

      }

      if(user){
          navigate('/')
      }

      
        return (
          <div className="w-2/5 mx-auto font-serif border rounded-2xl py-5">
            <h1 className="text-center text-2xl text-blue-500 font-bold my-3">
              Please Register
            </h1>
            <form onSubmit={handleRegister} className="w-10/12 mx-auto">
              <input
                className="border p-2 my-3 rounded-lg w-full"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <br />
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
                className="border p-2 my-3 rounded-lg w-full"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
              <br />
              {(loading || updating) && <p>Loading...</p>}
              {(error || UPerror) && <p>{error.message}</p>}
              <input
                className="bg-blue-600 text-white text-xl font-bold px-8 py-2 rounded-xl cursor-pointer"
                type="submit"
                value="Register"
              />
            </form>
            <p className="text-xl text-center my-3">
             Already have an account?
              <span onClick={()=>navigate('/login')} className="text-orange-500 cursor-pointer">Login</span>
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

export default Register;