const buttons = { add: "Add", edit: "Edit" };

function FormField({ fieldName, onShowModal, value }) {
  return (
    <div className="p-4 flex">
      <div className="w-full">
        <span className="w-1/2 text-sm inline-block">{fieldName}: </span>
        <span className="w-1/2 text-sm inline-block text-green-800">
          {value}
        </span>
      </div>
      <button
        onClick={() => onShowModal(fieldName, "add")}
        className="px-3 text-sm text-green-700 border rounded border-solid border-green-600 mr-1"
      >
        {buttons.add}
      </button>
      <button
        onClick={() => onShowModal(fieldName, "edit")}
        className="px-3 text-sm text-green-700 border rounded border-solid border-green-600"
      >
        {buttons.edit}
      </button>
    </div>
  );
}

export default FormField;
