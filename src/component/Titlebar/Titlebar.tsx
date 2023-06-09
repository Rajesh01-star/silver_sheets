import React, { FunctionComponent, useState } from "react";
import { parseExcelFile } from "../../utils/parseExcelfile";
import { CellValueState } from "../../store/CellValueState";
import useUpdateCellValues from "../../store/updateCellValueState";
import useLogNonEmptyCellValues from "../../utils/downloadSheet";

export type TitlebarProps = {
  onUploadSheet: (file: File) => void;
};

const Titlebar: FunctionComponent<TitlebarProps> = ({ onUploadSheet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUploadClick = () => {
    setIsModalOpen(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };


  const logNonEmptyCellValues = useLogNonEmptyCellValues(["1,1","1,2","1,3"]);

  const handleDownloadSheet = () => {
    logNonEmptyCellValues();
  };
  

  const updateCellValues = useUpdateCellValues();

  const handleUploadSheet = async () => {
    if (selectedFile) {
      onUploadSheet(selectedFile);
      const result = await parseExcelFile(selectedFile);
      updateCellValues(result);
    }
    setIsModalOpen(false);
    setSelectedFile(null);
  };
  

  return (
    <div className="border-2 border-black h-16 flex items-center justify-between px-4">
  <h1 className="text-xl font-bold">Google Sheets Clone</h1>
  <div className="flex items-center">
    <button
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      onClick={handleUploadClick}
    >
      Upload Sheet
    </button>
    <button
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded ml-4"
      onClick={handleDownloadSheet}
    >
      Download Sheet
    </button>
  </div>
  {isModalOpen && (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-4 rounded">
        <h2 className="text-lg font-bold mb-4">Select Sheet File</h2>
        <input
          type="file"
          accept=".xlsx, .xls, .csv"
          onChange={handleFileChange}
        />
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded mt-4"
          onClick={handleUploadSheet}
        >
          Upload
        </button>
        <button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded ml-4"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  )}
</div>

  );
};

export default Titlebar;
