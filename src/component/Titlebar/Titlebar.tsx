import React, { FunctionComponent, useState } from "react";
import { saveAs } from "file-saver";
import { parseExcelFile } from "../../utils/parseExcelfile";
import useUpdateCellValues from "../../store/updateCellValueState";
import useDownloadSheet,{generateCellIdsInRange} from "../../utils/downloadSheet";

import {RxUpload,RxDownload} from "react-icons/rx"

export type TitlebarProps = {
  onUploadSheet: (file: File) => void;
};

const Titlebar: FunctionComponent<TitlebarProps> = ({ onUploadSheet }) => {

  const defaultHeadingText = "Untitled";
  const [headingText, setHeadingText] = useState(defaultHeadingText);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [range, setRange] = useState<string[]>([]);

  const updateCellValues = useUpdateCellValues();
  const downloadSheet = useDownloadSheet(range);

  // effect will fire when the cell range changes
  React.useEffect(() => {
    if (range.length > 0) {
      const csvString = downloadSheet();
      // Download the CSV file
      const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8' });
      saveAs(blob, 'cell_values.csv');
    }
  }, [range,downloadSheet]);

// download button handler
const handleDownloadSheet = () => {
  const inputStartCellId = window.prompt("Enter the starting cell ID:");
  const inputEndCellId = window.prompt("Enter the ending cell ID:");

  // Assign default values if user cancels or leaves the prompts empty
  const updatedStartCellId = inputStartCellId || '';
  const updatedEndCellId = inputEndCellId || '';

  const result = generateCellIdsInRange(updatedStartCellId, updatedEndCellId);
  setRange(result);
};

// upload button modal window open
const handleUploadClick = () => {
  setIsModalOpen(true);
};
// file upload handle
const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0] || null;
  setSelectedFile(file);
};

// uploads file->parse into json format->update the cells
const handleUploadSheet = async () => {
  if (selectedFile) {
    onUploadSheet(selectedFile);
    const result = await parseExcelFile(selectedFile);
    updateCellValues(result);
  }
  setIsModalOpen(false);
  setSelectedFile(null);
};

// editable heading handlers
  const handleHeadingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const editedText = event.target.value;
    setHeadingText(editedText || defaultHeadingText);
  };
// on enter it should blur the input
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.currentTarget.blur();
    }
  };

  return (
  <section className="h-20 flex items-center justify-between px-4">
    <div className="flex gap-x-4">
    <img src={`${process.env.PUBLIC_URL}/sheets.svg`} alt="My SVG" className="max-h-[3rem]" />
    <input
     type="text"
     value={headingText}
     onChange={handleHeadingChange}
     onKeyDown={handleKeyDown}
     className="border-2 border-green-200 w-fit max-w-[10rem] px-4 text-lg rounded focus:outline-none transition-all ease-in-out "
      />
    </div>
    <div className="flex items-center">
    <button
      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded flex items-center"
      onClick={handleUploadClick}>
      <RxUpload className="inline-block mr-2" /> Upload Sheet
    </button>
    <button
      className="px-4 py-2 flex items-center bg-green-500 hover:bg-green-600 text-white rounded ml-4"
      onClick={handleDownloadSheet}>
      <RxDownload className="inline-block mr-2" />Download Sheet
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
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded mt-4"
          onClick={handleUploadSheet}>
          Upload
        </button>
        <button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded ml-4"
          onClick={() => setIsModalOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  )}
</section>

  );
};

export default Titlebar;
