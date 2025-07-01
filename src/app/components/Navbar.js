export const Navbar = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="text-xl font-bold text-purple-600">AutoDev IQ</div>
      <nav className="space-x-6">
        <a href="#" className="text-gray-600 hover:text-black">
          Docs
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          About
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          Feedback
        </a>
        <button className="px-4 py-2 border rounded-full bg-sky-400 text-white">
          Sign In
        </button>
      </nav>
    </header>
  );
};
