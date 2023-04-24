export default function handleError(error) {
  if (error.code === "auth/user-not-found") {
    return "User not found";
  } else if (error.code === "auth/wrong-password") {
    return "Wrong password";
  } else if (error.code === "auth/too-many-requests") {
    return "Too many wrong attempts";
  } else if (error.code === "auth/weak-password") {
    return "Weak password!";
  } else {
    console.log(error);
    return "Unexpected Error";
  }
}
