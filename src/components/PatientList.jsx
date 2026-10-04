import { useState } from "react";
import PatientCard from "./PatientCard";
import PatientForm from "./PatientForm";

function PatientList() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Aman",
      age: 20,
      city: "Ahmedabad",
    },
    {
      id: 2,
      name: "Neha",
      age: 24,
      city: "Jaipur",
    },
    {
      id: 3,
      name: "Jitendra",
      age: 23,
      city: "Jaipur",
    },
  ]);

  function addPatient(newPatient) {
    setPatients([...patients, newPatient]);
  }

  function deletePatient(id) {
    const updatedPatients = patients.filter(function (patient) {
      return patient.id !== id;
    });

    setPatients(updatedPatients);
  }

  return (
    <section className="patients-section">
      <h2>Patients</h2>

      <PatientForm onAddPatient={addPatient} />

      <div className="patients-container">
        {patients.length === 0 && <p>No patients found.</p>}

        {patients.map(function (patient) {
          return (
            <PatientCard
              key={patient.id}
              patient={patient}
              onDelete={deletePatient}
            />
          );
        })}
      </div>
    </section>
  );
}

export default PatientList;