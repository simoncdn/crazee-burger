import { collection , getDocs, addDoc } from "firebase/firestore";
import { db } from "./api";

export const getUser = async (userId) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        if(doc.exists()){
            return console.log("Document data:", doc.data());
        } else {
            console.log("No such document!");
        }
    });
}

export const addUser = async (userId) => {
    await addDoc(collection(db, "users"), {
        username: userId,
        menu: {
            "0": {
                title: "Bonbon",
                price: 1.5,
            },
            "1": {
                title: "Chocolat",
                price: 2.5,
            },
        }
    });
}
