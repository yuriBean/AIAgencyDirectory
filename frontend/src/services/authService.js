import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { addUserToFirestore } from './firestoreService';

const signup = async (email, password, additionalData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await addUserToFirestore(user.uid, { email: user.email, ...additionalData });

    return user;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (email) => {
  try {
    console.log("Sending password reset email to:", email);
    await sendPasswordResetEmail(auth, email);
    return "Password reset email sent. Please check your inbox.";
  } catch (error) {
    throw new Error(error.message || "Failed to send password reset email.");
  }
};

export { signup, login, logout };
