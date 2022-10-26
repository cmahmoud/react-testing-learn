import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("Initial conditions", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
        name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
});
test("Confim button to be enabled when checkbox checked", async () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
        name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });
    await userEvent.click(checkbox);
    expect(button).toBeEnabled();
});
test("popover responds to hover", async () => {
    render(<SummaryForm />);
    // popover starts hidden
    const nullPopover = screen.queryByText(
        /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();
    // popover appears when mouse go over checkbox
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await userEvent.hover(termsAndConditions);
    const popover = screen.getByText(
        /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();
    // popover disappears when mouse go out
    await userEvent.unhover(termsAndConditions);
    const nullPopover2 = screen.queryByText(
        /no ice cream will actually be delivered/i
    );
    expect(nullPopover2).not.toBeInTheDocument();
});
