import { RxCross2 } from "react-icons/rx";
export const SuggestedQuestions = () => {
  const suggestions = [
    {
      line: "Dev dependencies in package.json",
    },
    {
      line: "Explain UploadCode.js file",
    },
  ];
  return (
    <div className="flex space-x-3 mt-2">
      {suggestions.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between p-2 rounded-lg border border-gray-200 shadow-sm cursor-pointer"
        >
          <span className="text-gray-800 font-medium">{item.line}</span>
          <RxCross2 className="ml-1" />
        </div>
      ))}
    </div>
  );
};
