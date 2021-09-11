import firebase from "./firebase";


export const addInfo = (info) => {
    const contactRef = firebase.database().ref("contact");
    contactRef.push(info)
}