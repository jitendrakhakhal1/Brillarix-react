import { useState } from "react";

function PatientForm({ onAddPatient }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "" || age.trim() === "" || city.trim() === "") {
      setError("Please fill all patient details.");
      return;
    }

    const newPatient = {
      id: Date.now(),
      name,
      age: Number(age),
      city,
    };

    onAddPatient(newPatient);

    setName("");
    setAge("");
    setCity("");
    setError("");
  }

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Patient name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />

      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button type="submit">Add Patient</button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default PatientForm;