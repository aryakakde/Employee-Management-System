import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 px-9 py-20 sm:p-20'>
                {/* Add hint message here */}
                <div className='mb-4 text-center'>
                    <p className='text-gray-600'>
                        <strong>For demo login:</strong>
                    </p>
                    <p className='text-gray-500'>
                        Employees:
                        <br />
                        1. email: emp1@example.com, pass: 123
                        <br />
                        2. email: emp2@example.com, pass: 123
                        <br />
                        3. email: emp3@example.com, pass: 123
                        <br />
                        4. email: emp4@example.com, pass: 123
                        <br />
                        5. email: emp5@example.com, pass: 123
                        <br />
                        Admin:
                        <br />
                        email: admin@me.com, password: 123
                    </p>
                </div>

                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col items-center justify-center'
                >
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400'
                        type='email'
                        placeholder='Enter your email'
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
                        type='password'
                        placeholder='Enter password'
                    />
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
