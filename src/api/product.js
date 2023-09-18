import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./api";

export const getMenu = async (userId) => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const userReceived = docSnap.data();
        return userReceived.menu;
    }
    else{
        return null;
    }
};

export const syncBothMenu = (userId, menu) => {
    const docRef = doc(db, "users", userId);
    const user = {
        username: userId,
        menu: menu
    }
    setDoc(docRef, user);
}
