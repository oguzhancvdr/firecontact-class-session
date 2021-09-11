import firebase from "./firebase";
import { useState, useEffect } from "react";
import { successToastify } from "./customToasitfy";

export const addInfo = (info) => {
  const contactRef = firebase.database().ref("contact");
  contactRef.push(info);
  successToastify("Added successfully");
};

export const useFetch = () => {
  const [contactList, setContactList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const contactRef = firebase.database().ref("contact");
    contactRef.on("value", (snapshot) => {
      const contacts = snapshot.val();

      const contactArray = [];
      for (let id in contacts) {
        contactArray.push({ id, ...contacts[id] });
      }
      setContactList(contactArray);
      setIsLoading(false);
    });
  }, []);

  return { contactList, isLoading };
};

export const deleteHandler = (id) => {
    const contactRef = firebase.database().ref("contact").child(id);
    contactRef.remove();
    successToastify("Deleted successfully");
}

export const editHandler = (info) => {
    const contactRef = firebase.database().ref("contact").child(info.id);
    contactRef.update(info)
    successToastify("Updated Successfully")
}