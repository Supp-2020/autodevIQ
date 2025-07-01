export const UploadCode = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-4 mb-8 border border-gray-300">
      <h2 className="text-lg font-semibold mb-2">Upload GitHub Repository</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="https://github.com/user/repo"
          defaultValue={""}
          className="flex-grow border border-gray-300 rounded-lg px-3 py-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Analyze
        </button>
      </div>
    </div>
  );
};
