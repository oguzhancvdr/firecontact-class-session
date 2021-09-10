import { useState } from "react";
import Contacts from "./components/contacts/Contacts";
import Form from "./components/form/Form";
import { addInfo, updateHandler } from "./utils/functions";
import { ToastContainer } from "react-toastify";

const initialValues = { username: "", phoneNumber: "", gender: "NO INFO!" };

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (info?.id) {
      updateHandler(info);
    } else {
      addInfo(info);
    }
    setInfo(initialValues);
  };

  const updateFormHandler = (item) => {
    setInfo({...item });
  };

  return (
    <div className="App">
      <Form
        className="form"
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts className="contacts" updateFormHandler={updateFormHandler} />
      <ToastContainer />
    </div>
  );
}

export default App;
