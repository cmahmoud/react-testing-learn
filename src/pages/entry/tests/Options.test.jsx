import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop option from the server", async () => {
    render(<Options optionType="scoops" />);
    // Find images
    const scoops = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoops).toHaveLength(2);
    // Confirm images alt text
    const altText = scoops.map((x) => x.alt);
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
test("displays image for each toping option from the server", async () => {
    render(<Options optionType="topings" />);
    // Find images
    const topings = await screen.findAllByRole("img", { name: /toping$/i });
    expect(topings).toHaveLength(3);
    // Confirm images alt text
    const altText = topings.map((x) => x.alt);
    expect(altText).toEqual([
        "Cherries toping",
        "M&Ms toping",
        "Hot fudge toping",
    ]);
});
