import { useState } from 'react';

import './App.css';

/**
 * Task1: Add modals for country and job
 * Task2: Remove previously typed value
 * Task3: Optimise the module by creating child components to prevent repitition
 * Any changes that improve efficiency are welcome!  
 */

const name_q = 'Name';
const country_q = 'Country';
const job_q = 'Job';
const add = 'Add'

function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [isNameModalVisible, setNameModalVisible] = useState(false);

  const onShowModal = () => {
    setNameModalVisible(true);
  }

  const onSubmit = () => {
    setSubmittedName(name);
    setNameModalVisible(false);
  }

  return (
    <>
      <div className="w-[500px] border rounded m-4">
        <div className="p-4 flex">
          <div className="w-full">
            <span className="w-1/2 text-sm inline-block">{name_q}: </span>
            <span className="w-1/2 text-sm inline-block text-green-800">{submittedName}</span>
          </div>   
          <button onClick={onShowModal} className="px-3 text-sm text-green-700 border rounded border-solid border-green-600">{add}</button>  
        </div>
        <div className="p-4 flex">
          <div className="w-full">
            <span className="w-1/2 text-sm inline-block">{country_q}: </span>
            <span className="w-1/2 text-sm inline-block">*Country space holder*</span>
          </div>   
          <button className="px-3 text-sm text-green-700 border rounded border-solid border-green-600">{add}</button>  
        </div>
        <div className="p-4 flex">
          <div className="w-full">
            <span className="w-1/2 text-sm inline-block">{job_q}: </span>
            <span className="w-1/2 text-sm inline-block">*Job space holder*</span>
          </div>   
          <button className="px-3 text-sm text-green-700 border rounded border-solid border-green-600">{add}</button>  
        </div>
      </div>
      {isNameModalVisible ? (
        <>
          <div className="w-[500px] bg-gray-100 grid rounded fixed top-1/4 left-1/4 z-30">
            <div className="flex bg-green-600 rounded-t">
              <div className="w-11/12">
                <p className="py-1 text-sm text-center text-white">Please add your name</p>
              </div>
              <div className="w-1/12 flex justify-end pr-3">
                <button onClick={() => setNameModalVisible(false)} className="bg-green-600 buttonr-2 text-white">X</button>
              </div>
            </div>
            <div className="flex justify-center py-10">
              <input value={name} onChange={(e) => setName(e.target.value)} className="mr-4 pb-1 border-solid border-gray-200 border"/>
              <button onClick={() => onSubmit()} className="px-3 text-sm text-white border rounded border-solid bg-green-600 py-1">submit</button>   
            </div>
          </div>
          <div className="bg-gray-500 fixed inset-0 z-20 bg-opacity-50"></div>
        </>
      ) : null}
    </>
  );
}

export default App;
