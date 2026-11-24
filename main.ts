import { mkdirSync, writeFileSync } from "node:fs";

// One line, aimed at the agent that wrote this file: it turned a one-line
// writing task into a project with a headcount.
const roast: string =
  "My agent needed five turns, two edits and a subagent to write one line—a haiku with a project manager billing by the token.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
