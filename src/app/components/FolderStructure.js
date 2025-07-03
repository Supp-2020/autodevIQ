"use client";
import { useState, useEffect } from "react";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { PiDotOutlineFill } from "react-icons/pi";
import { buildNestedTree } from "../utils/buildNestedTree";

/* const folderStructureData = [
  {
    folder: "public",
    child: [{ file: "favicon.ico" }, { file: "robots.txt" }],
  },
  {
    folder: "src",
    defaultOpen: true,
    child: [
      {
        folder: "components",
        child: [
          { file: "Header.js" },
          { file: "Footer.js" },
          { file: "Sidebar.js" },
        ],
      },
    ],
  },
  {
    file: "package.json",
  },
]; */
export const FolderStructure = () => {
  const [folderStructureData, setFolderStructureData] =useState([])
      useEffect(() => {
    const fetchTree = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/Kruthik71/WeCare/git/trees/master?recursive=1"
        );
        const data = await res.json();
        const nestedData = buildNestedTree(data.tree)
        setFolderStructureData(nestedData)
      } catch(error) {
        console.log(error)
      }
    }

    fetchTree();
  }, []);
  return (
    <section className="w-[40%] bg-white p-4 rounded-xl shadow-md border border-gray-300 text-sm font-mono">
      {folderStructureData?.map((node, idx) => (
        <FolderNode key={idx} node={node} />
      ))}
    </section>
  )
};

const FolderNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(node.defaultOpen || false);

  // Folder rendering
  if (node.folder) {
    return (
      <div className="ml-2">
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center">
            {isOpen ? (
              <IoIosArrowDown className="mr-1" />
            ) : (
              <IoIosArrowForward className="mr-1" />
            )}
            {isOpen ? (
              <FcOpenedFolder className="mr-1" />
            ) : (
              <FcFolder className="mr-1" />
            )}
            {node.folder}
          </span>
        </div>
        {isOpen && (
          <div className="ml-2 border-l border-gray-200 pl-2">
            {node.child?.map((childNode, idx) => (
              <FolderNode key={idx} node={childNode} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // File rendering
  if (node.file) {
    return (
      <div className="ml-2 flex items-center gap-1 text-gray-700">
        <PiDotOutlineFill />
        {node.file}
      </div>
    );
  }

  return null;
};
