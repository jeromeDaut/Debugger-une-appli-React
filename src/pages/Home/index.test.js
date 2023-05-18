import { act, fireEvent, render, screen } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    beforeEach(() => {
      jest.useFakeTimers({});
    });

    afterEach(() => {
      jest.clearAllTimers();
    });
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
      act(()=>jest.advanceTimersByTime(5000))
      await screen.findByText("Envoyer");
    });
  });
  
});

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render( <Home />);
    expect(screen.getByTestId("list-events")).toBeInTheDocument();
    wait(() => {
      expect(screen.getByText("#DigitonPARIS")).toBeInTheDocument();
  });
  });
    
  });
  
  it("a list a people is displayed", async () => {
    render(<Home />);
    expect (screen.getByText("Samira")).toBeInTheDocument();
    expect (screen.getByText("Isabelle")).toBeInTheDocument();
  });

  it("a footer is displayed", () => {
    render(<Home />);
    // Trouver l'élément avec le rôle "contentinfo" pour le footer
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByText("45 avenue de la République, 75000 Paris")).toBeInTheDocument();
  });

  it("an event card, with the last event, is displayed", () => {
      render(<Home />);
        wait(() => {
        expect(screen.getAllByTestId("last-event")).toBeInTheDocument();
      });
      
  });