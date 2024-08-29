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

  const onShowModal = (fieldName, actionType) => {
    setCurrentField(fieldName);
    if (actionType === "add") {
      setModalType("add");
    } else if (actionType === "edit") {
      setModalType("edit");
    }
  };

  const onSubmit = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [currentField]: value,
    }));
    setCurrentField("");
  };

  const closeModal = () => {
    setCurrentField("");
    setModalType("");
  };

  return (
    <>
      <div className="w-[500px] border rounded m-4">
        {formFields.map((item, index) => (
          <FormField
            fieldName={item.name}
            key={index}
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
