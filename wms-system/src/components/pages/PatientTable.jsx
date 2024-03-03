import React, { useState } from 'react';
import TextField from './TextField';
import Modal from './Modal'; // Assuming you have created a Modal component
import Popup from './Modal';
import './PatientTable.css'

export default function PatientTable({ setRoute }) {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
      // Perform delete action here or set up any necessary logic
      setShowModal(true); // Show the modal when delete button is clicked
    };
    return (
        <>
            <div className="row g-3 my-2">
                <div className="col-lg-6">
                    <h1 className="fw-bold text-white">Attendence Table</h1>
                </div>
                <div className="col-lg-3">
                    <TextField />
                </div>
                <div className="col-lg-3">
                    <button className="btn btn-primary h-100" onClick={() => setRoute("userRegistration")}>
                        Add doctors
                    </button>
                </div>
            </div>
            <div className="row g-3 my-2">
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-primary" style={{ color: '#333333' }}>
                        <thead className="color-head">
                            <tr>
                                <th scope="col">Doctor ID</th>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">NIC</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Status</th>
                                <th scope="col">Specialization</th>
                                <th scope="col">Email</th>
                                <th>Delete</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>DC0001</td>
                                <td>Mr Perera</td>
                                <td>2001234564</td>
                                <td>191036403129</td>
                                <td>Available</td>
                                <td>Child</td>
                                <td>prerea@gmail.com</td>
                                <td>
                                    <Popup />
                                </td>
                            </tr>
                            <tr>
                                <td>DC0001</td>
                                <td>Mr Perera</td>
                                <td>2001234564</td>
                                <td>191036403129</td>
                                <td>Available</td>
                                <td>Child</td>
                                <td>prerea@gmail.com</td>
                                <td>
                                    <Popup />
                                </td>
                            </tr>
                            <tr>
                                <td>DC0001</td>
                                <td>Mr Perera</td>
                                <td>2001234564</td>
                                <td>191036403129</td>
                                <td>Available</td>
                                <td>Child</td>
                                <td>prerea@gmail.com</td>
                                <td>
                                    <Popup />
                                </td>
                            </tr>
                            <tr>
                                <td>DC0001</td>
                                <td>Mr Perera</td>
                                <td>2001234564</td>
                                <td>191036403129</td>
                                <td>Available</td>
                                <td>Child</td>
                                <td>prerea@gmail.com</td>
                                <td>
                                    <Popup />
                                </td>
                            </tr>
                            {/* Other rows */}
                        </tbody>
                    </table>
                </div>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {/* Content of the modal */}
                    <p>Are you sure you want to delete this Doctor?</p>
                    <button className="btn btn-danger" onClick={() => setShowModal(false)}>Delete</button>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                </Modal>
            )}
        </>
    )
}