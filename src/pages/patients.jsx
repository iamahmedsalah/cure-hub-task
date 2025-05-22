import React from "react";

import PatientsList from "../components/patients/PatientsLists";
import PatientsDetails from "../components/patients/PatientsDetails";
import PatientsAppointment from "../components/patients/PatientsAppointment";



const Patients = () => (
  <div className="h-full">
      <PatientsList/>
      <PatientsDetails/>
      <PatientsAppointment/>
  </div>
);

export default Patients;