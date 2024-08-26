import { useState } from "react";

import "./App.css";
import FormField from "./components/FormField";
import Modal from "./components/Modal";

/**
 * Task1: Add modals for country and job
 * Task2: Remove previously typed value
 * Task3: Optimise the module by creating child components to prevent repitition
 * Any changes that improve efficiency are welcome!
 */

const formFields = [{ name: "name" }, { name: "country" }, { name: "job" }];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    job: "",
  });
  const [currentField, setCurrentField] = useState("");

  const onShowModal = (fieldName) => {
    setCurrentField(fieldName);
  };

  const onSubmit = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [currentField]: value,
    }));
    setCurrentField(null);
  };

  const closeModal = () => {
    setCurrentField("");
  };

  return (
    <>
      <div className="w-[500px] border rounded m-4">
        {formFields.map((item, index) => (
          <FormField
            key={index}
            fieldName={item.name}
            value={formData[item.name]}
            onShowModal={onShowModal}
          />
        ))}
      </div>
      {currentField && (
        <Modal
          closeModal={closeModal}
          onSubmit={onSubmit}
          fieldName={
            formFields.find((field) => field.name === currentField).name
          }
        />
      )}
    </>
  );
}

export default App;
