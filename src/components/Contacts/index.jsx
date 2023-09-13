import React from "react";

import { ContactsWrapper } from "./styled";
import { contactInfo } from "./config";

const Contacts = () => {
  const { address, phone, email } = contactInfo;

  return (
    <ContactsWrapper>
      <p>Adress: {address}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </ContactsWrapper>
  );
};

export default Contacts;
