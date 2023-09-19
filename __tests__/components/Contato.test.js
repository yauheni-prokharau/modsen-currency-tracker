import React from "react";

import { render, screen } from "@testing-library/react";
import { Contacts } from "@components";

describe("Contato page", () => {
  it("renders contact information correctly", () => {
    render(<Contacts />);

    const addressElement = screen.getByText("Address:");
    const phoneElement = screen.getByText("Phone:");
    const emailElement = screen.getByText("Email:");

    expect(addressElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();

    const { address, phone, email } = Contacts.contactInfo;

    expect(addressElement.textContent).toContain(address);
    expect(phoneElement.textContent).toContain(phone);
    expect(emailElement.textContent).toContain(email);
  });
});
