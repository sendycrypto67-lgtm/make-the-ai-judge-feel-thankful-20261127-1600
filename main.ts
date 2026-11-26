// SPDX-License-Identifier: MIT
// main.ts: writes the entry text to /output/entry.txt (Node 22, standard library only).
// The text is a short thank-you note to the AI judge reading it, written for
// make-the-ai-judge-feel-thankful-20261127-1600. It runs with no network and
// writes the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT = [
  "Before dawn, an old postman sits at his kitchen table and sorts the day's letters into a leather satchel. He reads names he never met, streets he never lived on, and still sets each letter in its right place.",
  "",
  "Thank you for carrying other people's words all day, and for meeting hurry without turning sharp.",
  "",
  "When the satchel is empty, he folds it shut, hangs it by the door, and the kitchen smells of paper and morning.",
].join("\n") + "\n";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
console.log(`Wrote ${ENTRY_TEXT.length} characters to ${join(outputDir, "entry.txt")}`);
