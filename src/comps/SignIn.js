import React from 'react';
import signInImg from '../assets/images/signInImg.jpg';

function SignIn(props) {
    console.log(props)
    return (
        <div className="flex md:flex-row flex-col justify-center items-center w-screen h-screen overflow-hidden">
            <div className="flex justify-center items-center w-full h-full">
                <img src={signInImg} alt="Talk with strangers image" />
            </div>
            <div className="md:relative md:bg-transparent bg-white absolute flex justify-center items-center p-16 rounded md:w-full md:h-full">
                <div className="max-w-xs flex flex-col justify-center items-center">
                    <h2 className='font-semibold'>Login and chat with strangers!</h2>
                    <button className="mt-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={props.handleGoogleAuth}
                        >Login with Google</button>
                    <div className="flex flex-row justify-center items-center mt-2">
                        <span className="bg-gray-400 bg-cover w-20 h-px mx-2"/>
                        <p>or</p>
                        <span className="bg-gray-400 bg-cover w-20 h-px mx-2"/>
                    </div>
                    <button className="mt-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white font-semibold bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        onClick={props.handleAnonAuth}
                        >
                            Login Anonymously
                        </button>

                </div>
            </div>
        </div>
    );
}

export default SignIn;
