const add = "Add";

function FormField({ fieldName, value, onShowModal }) {
  return (
    <>
      <div className="p-4 flex">
        <div className="w-full">
          <span className="w-1/2 text-sm inline-block">{fieldName}: </span>
          <span className="w-1/2 text-sm inline-block text-green-800">
            {value}
          </span>
        </div>
        <button
          onClick={() => onShowModal(fieldName)}
          className="px-3 text-sm text-green-700 border rounded border-solid border-green-600"
        >
          {add}
        </button>
      </div>
    </>
  );
}

export default FormField;
