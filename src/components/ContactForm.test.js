import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm'

test('render form without errors', () => {
    render(<ContactForm />)
})

test('add new uswer', () => {
    render(<ContactForm />)

    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const email = screen.getByLabelText(/email/i)
    const message = screen.getByLabelText(/message/i)
    const submitBtn = screen.getByRole('button', { name: /submit/i })
    
    fireEvent.change(firstName, { target: { value: 'Bean' } })
    fireEvent.change(lastName, { target: { value: 'Green' } })
    fireEvent.change(email, { target: { value: 'Bean@yard.com' } })
    fireEvent.change(message, { target: { value: 'what a nice day' } })
    fireEvent.click(submitBtn)

    expect(screen.findByText(/been green bean@yard.com what a nice day/i)).toBeInTheDOM
})