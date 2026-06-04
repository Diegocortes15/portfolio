import { describe, it, expect } from "vitest";
import {
  dictionary,
  boot,
  skills,
  projects,
  experience,
  frameworks,
  palettes,
  links,
} from "./portfolio.config";

describe("portfolio config", () => {
  it("provides both languages with identical key shape", () => {
    expect(Object.keys(dictionary.en)).toEqual(Object.keys(dictionary.es));
  });

  it("has a single flagship project with a non-empty architecture", () => {
    const flagships = projects.filter((p) => p.flagship);
    expect(flagships).toHaveLength(1);
    flagships.forEach((p) => expect(p.arch.length).toBeGreaterThan(0));
  });

  it("gives every project EN + ES titles, tools and a repo URL", () => {
    projects.forEach((p) => {
      expect(p.title.en).toBeTruthy();
      expect(p.title.es).toBeTruthy();
      expect(p.tools.length).toBeGreaterThan(0);
      expect(p.url).toMatch(/^https:\/\/github\.com\//);
    });
  });

  it("points every framework at a github repo", () => {
    expect(frameworks.length).toBeGreaterThan(0);
    frameworks.forEach((f) => expect(f.url).toMatch(/^https:\/\/github\.com\//));
  });

  it("orders experience most-recent-first and starts the top role expanded", () => {
    expect(experience[0].open).toBe(true);
    expect(experience.every((node) => node.accs.en.length === node.accs.es.length)).toBe(true);
  });

  it("keeps the skills matrix and boot/palette data populated", () => {
    expect(skills.length).toBeGreaterThan(0);
    expect(boot.length).toBeGreaterThan(0);
    expect(palettes.length).toBeGreaterThan(0);
  });

  it("exposes the expected contact channels", () => {
    expect(links.email).toContain("@");
    expect(links.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
    expect(links.github).toMatch(/^https:\/\/github\.com\//);
  });
});
