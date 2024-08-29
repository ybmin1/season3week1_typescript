import { useState } from "react";

const pleaseAddYour = "Please add your ";
const pleaseEditYour = "Please edit your ";
const submit = "submit";

function Modal({ closeModal, fieldName, modalType, onSubmit, value }) {
  const [tempValue, setTempValue] = useState(
    modalType === "edit" && value ? value : ""
  );

  const handleSubmit = () => {
    onSubmit(tempValue);
    setTempValue("");
  };

  return (
    <>
      <div className="w-[500px] bg-gray-100 grid rounded fixed top-1/4 left-1/4 z-30">
        <div className="flex bg-green-600 rounded-t">
          <div className="w-11/12">
            <p className="py-1 text-sm text-center text-white">
              {modalType === "add" ? pleaseAddYour : pleaseEditYour}
              {fieldName}
            </p>
          </div>
          <div className="w-1/12 flex justify-end pr-3">
            <button
              onClick={closeModal}
              className="bg-green-600 buttonr-2 text-white"
            >
              X
            </button>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <input
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="mr-4 pb-1 border-solid border-gray-200 border"
          />
          <button
            onClick={handleSubmit}
            className="px-3 text-sm text-white border rounded border-solid bg-green-600 py-1"
          >
            {submit}
          </button>
        </div>
      </div>
      <div className="bg-gray-500 fixed inset-0 z-20 bg-opacity-50"></div>
    </>
  );
}

export default Modal;
