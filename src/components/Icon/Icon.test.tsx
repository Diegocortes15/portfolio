import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Icon from "./Icon";

describe("Icon", () => {
  it("renders an svg for a registered glyph name", () => {
    const { container } = render(<Icon name="github" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders nothing for an unknown glyph name", () => {
    const { container } = render(<Icon name="does-not-exist" />);
    expect(container.querySelector("svg")).toBeNull();
  });
});
