import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState({ firstName: "", lastName: "" });

  const [addContact, setAddContact] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue((inputValue) => ({ ...inputValue, [name]: value }));

    console.log("value typed is:", value);
  }

  function handleSubmit() {
   
    setAddContact((addContact) => [...addContact, inputValue]);
  }

  const contacts = addContact.map((c) => <p>{c.firstName} {c.lastName}</p>);

  console.log(addContact.firstName);

  return (
    <div>
      <form>
        <input
          placeholder="first name"
          name="firstName"
          value={inputValue.firstName}
          onChange={handleChange}
        />

        <input
          placeholder="last name"
          name="lastName"
          value={inputValue.lastName}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> Add Contact </button>
      </form>
      {contacts}
    </div>
  );
}