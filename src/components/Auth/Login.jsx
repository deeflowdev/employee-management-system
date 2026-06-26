import { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("form submit!");

    handleLogin(email, password)
    
    setEmail('')
    setPassword('')

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fbfdff] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">welcome back</h1>
          <p className="text-slate-500 mt-2 text-sm">
            sign in to access your employee dashboard
          </p>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="employee@company.com"
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />

          <input value={password} onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="enter your password"
            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg outline-none text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />

          <button className="w-full mt-2 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 active:scale-95 shadow-sm">
            sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login