const Header = (props) => {
  

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  const hour = new Date().getHours()

  let greeting = ''

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-200">
      <div>
        <p className="text-sm font-medium tracking-widest uppercase text-slate-500">
          Welcome back
        </p>

        <h1 className="mt-1 text-4xl font-bold tracking-tight text-slate-900">
          {greeting}, <span className="text-blue-700">{props.data.name}</span>
        </h1>
      </div>

      <button
        onClick={logOutUser}
        className="rounded-xl border border-red-200 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 shadow-sm transition-all duration-300 hover:border-red-300 hover:bg-red-50 hover:shadow active:scale-95 cursor-pointer"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
