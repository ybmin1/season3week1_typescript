import { useState } from "react";

import "./App.css";
import FormField from "./components/FormField";
import Modal from "./components/Modal";

const formFields = [{ name: "name" }, { name: "country" }, { name: "job" }];

function App() {
  const [currentField, setCurrentField] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    job: "",
  });
  const [modalType, setModalType] = useState("");

  const closeModal = () => {
    setCurrentField("");
    setModalType("");
  };

  const onDelete = (fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: "",
    }));
  };

  const onShowModal = (fieldName, actionType) => {
    setCurrentField(fieldName);
    setModalType(actionType === "add" ? "add" : "edit");
  };

  const onSubmit = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [currentField]: value,
    }));
    setCurrentField("");
  };

  return (
    <>
      <div className="w-[500px] border rounded m-4">
        {formFields.map((item, index) => (
          <FormField
            fieldName={item.name}
            key={item.name}
            onDelete={onDelete}
            onShowModal={onShowModal}
            value={formData[item.name]}
          />
        ))}
      </div>
      {currentField && (
        <Modal
          closeModal={closeModal}
          fieldName={currentField}
          modalType={modalType}
          onSubmit={onSubmit}
          value={formData[currentField]}
        />
      )}
    </>
  );
}

export default App;
