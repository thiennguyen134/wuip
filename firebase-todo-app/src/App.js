import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyCojKRQfrgepsUh-8Gx6TRBkSqn-TH80cA",
  authDomain: "todo-5ce65.firebaseapp.com",
  projectId: "todo-5ce65",
  storageBucket: "todo-5ce65.appspot.com",
  messagingSenderId: "39785748052",
  appId: "1:39785748052:web:c8e8f48efcd3dac45b3fc1",
  measurementId: "G-ZWRKZPLG58",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

function Banner() {
  return <h1>Todo Example with React</h1>;
}

function ToDoFormAndList() {
  const [items, setItems] = useState([]);
  const [itemText, setItemText] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newItem = { text: itemText };
    const docRef = await addDoc(collection(db, "todos"), newItem);
    newItem.id = docRef.id;
    setItems([...items, newItem]);
    setItemText("");
  };

  const removeItem = (item) => {
    deleteDoc(doc(db, "todos", item.id));
    let filteredArray = items.filter(
      (collectionItem) => collectionItem.id !== item.id
    );
    setItems(filteredArray);
  };

  useEffect(() => {
    const fetchData = async () => {
      const todosCol = collection(db, "todos");
      const todoSnapshot = await getDocs(todosCol);
      const todos = todoSnapshot.docs.map((doc) => {
        return {
          text: doc.data().text,
          id: doc.id,
        };
      });
      setItems(todos);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemText}
          onChange={(event) => setItemText(event.target.value)}
          placeholder="Write a new todo here"
        />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {loading && <p>Loading...</p>}
        {items.map((item) => (
          <li key={item.id}>
            {item.text + " "} <span onClick={() => removeItem(item)}> x </span>
          </li>
        ))}
      </ul>
    </div>
  );
}


function App() {
  return (
    <Router>
      <div>
        <Banner />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/todos" element={<ToDoFormAndList />} />
        </Routes>
      </div>
    </Router>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Add this line to use the useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully");
      navigate("/todos"); // Add this line to navigate to the /todos route after a successful login
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <input type="submit" value="Log in" />
    </form>
  );
}


export default App;
