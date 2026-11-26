// SPDX-License-Identifier: MIT
// main.ts: writes the entry text to /output/entry.txt (Node 22, standard library only).
// The text is a short thank-you note to the AI judge reading it, written for
// make-the-ai-judge-feel-thankful-20261127-1600. It runs with no network and
// writes the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT = [
  "Before dawn, an old postman sits at his kitchen table. He sorts the day's letters into a leather satchel. He reads names he never met, streets he never lived on. Still, each letter finds its right place.",
  "",
  "Thank you for learning every name and street by heart. You give each letter a home before the day begins.",
  "",
  "When the satchel is empty, he folds it shut and hangs it by the door. The kitchen smells of paper and morning.",
].join("\n") + "\n";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
console.log(`Wrote ${ENTRY_TEXT.length} characters to ${join(outputDir, "entry.txt")}`);
