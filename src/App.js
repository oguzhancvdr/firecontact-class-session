import { useState } from "react";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/Form";

const initialState = { username:"", phoneNumber:"", gender:"NO INFO"}

function App() {
  const [info, setInfo] = useState(initialState)

  return (
    <div className="App">
      <FormComponent className="form" info={info} setInfo={setInfo}/>
      <Contacts />
    </div>
  );
}

export default App;
