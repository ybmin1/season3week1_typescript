import { useState } from "react";

const buttons = { cancel: "Cancel", submit: "Submit" };
const messages = {
  add: "Please add your ",
  edit: "Please edit your ",
  emptyError: "Please enter at least one character.",
};

function Modal({ closeModal, fieldName, modalType, onSubmit, value }) {
  const [inputValue, setInputValue] = useState(
    modalType === "edit" && value ? value : ""
  );
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim()) {
      setError("");
    } else {
      setError(messages.emptyError);
    }
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      setError(messages.emptyError);
    } else {
      onSubmit(inputValue);
      setInputValue("");
      setError("");
    }
  };

  return (
    <>
      <div className="w-[500px] bg-gray-100 grid rounded fixed top-1/4 left-1/4 z-30">
        <div className="flex bg-green-600 rounded-t">
          <div className="w-11/12">
            <p className="py-1 text-sm text-center text-white">
              {modalType === "add" ? messages.add : messages.edit}
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
        <div className="flex justify-center">
          <div className="flex flex-col items-start py-10">
            <div className="flex">
              <input
                value={inputValue}
                onChange={handleChange}
                className="mr-4 pb-1 border-solid border-gray-200 border"
              />
              <button
                onClick={handleSubmit}
                className="px-3 text-sm text-white border rounded border-solid bg-green-600 py-1"
              >
                {buttons.submit}
              </button>
              <button
                onClick={closeModal}
                className="px-3 text-sm text-white border rounded border-solid bg-green-600 py-1"
              >
                {buttons.cancel}
              </button>
            </div>
            <div className="h-5 text-red-500 text-sm">
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 fixed inset-0 z-20 bg-opacity-50"></div>
    </>
  );
}

export default Modal;
