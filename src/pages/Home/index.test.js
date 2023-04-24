import { act, fireEvent, render, screen, within } from "@testing-library/react";
import Home from "./index";

// jest.mock("../../contexts/DataContext", () => ({
//   useData: jest.fn(() => ({ data: { events: [] } })),
// }));
describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });
  
  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
        );
        await screen.findByText("En cours");
        act(()=>jest.advanceTimersByTime(1000))
        await screen.findByText("Envoyer");
      });
    });
    
  });
  
  

  describe("When a page is created", () => {
    it("a list of events is displayed", () => {
      
    });
  });
  
  it("a list a people is displayed", async () => {
    render(<Home />);
    // Trouver le titre pour la section "Notre équipe"
    const title = await screen.findByRole("heading", { name: "Notre équipe" });
    // Trouver tous les éléments avec le rôle "img" à l'intérieur de la section "Notre équipe"
    const figures = within(title.closest("section")).getAllByRole("img");
    expect(figures).toHaveLength(6);
  });
  
  it("a footer is displayed", async () => {
    render(<Home />);
    // Trouver l'élément avec le rôle "contentinfo" pour le footer
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
  
  it("an event card, with the last event, is displayed",  () => {
    
  });
  // });