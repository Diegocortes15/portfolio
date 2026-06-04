import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { I18nProvider } from "../../lib/i18n";
import { dictionary } from "../../config/portfolio.config";

describe("Footer", () => {
  it("renders the copyright and status line from the dictionary", () => {
    render(
      <I18nProvider>
        <Footer />
      </I18nProvider>
    );
    expect(screen.getByText(dictionary.en.footer.rights)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(dictionary.en.footer.allpass))).toBeInTheDocument();
  });
});
