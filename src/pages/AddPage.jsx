import React from "react";
import { addContact } from "../utils/data";
import ContactInput from "../components/ContactInput";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  // auto navigasi hook

  const navigate = useNavigate();

  const onAddContactHandler = (contact) => {
    addContact(contact);
    navigate("/");
  };

  return (
    <section>
      <h2>Tambah Kontak</h2>
      <ContactInput addContactHandler={onAddContactHandler} />
    </section>
  );
};

export default AddPage;
