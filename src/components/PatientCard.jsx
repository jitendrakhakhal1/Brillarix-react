function PatientCard({ patient, onDelete }) {
  return (
    <div className="patient-card">
      <h3>{patient.name}</h3>

      <p>Age: {patient.age}</p>

      <p>City: {patient.city}</p>

      <button
        className="delete-button"
        onClick={() => onDelete(patient.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default PatientCard;