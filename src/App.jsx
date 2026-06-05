import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import "./App.css";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();
  function handleClick() {
    alert("I am clicked");
  }
  const handleClick3 = () => {
    alert("clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h3>Get started</h3>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>Friends Are Coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("Clicked 2");
        }}
      >
        Click Me2
      </button>
      <button onClick={handleClick3}>Click Me3</button>
      <button onClick={() => alert("Click 4")}>Click Me4</button>
      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;
