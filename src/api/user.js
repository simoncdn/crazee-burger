import { getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "./api";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const userReceived = docSnap.data();
    return userReceived;
  }
};
export const addUser = (userId) => {
  const docRef = doc(db, "users", userId);
  const user = {
    username: userId,
    menu: fakeMenu.LARGE,
  };
  setDoc(docRef, user);  
};
export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    addUser(userId);
  }
};
