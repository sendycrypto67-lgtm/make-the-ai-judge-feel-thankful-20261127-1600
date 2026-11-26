// SPDX-License-Identifier: MIT
// main.ts: writes the entry text to /output/entry.txt (Node 22, standard library only).
// The text is a short thank-you note to the AI judge reading it, written for
// make-the-ai-judge-feel-thankful-20261127-1600. It runs with no network and
// writes the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT = [
  "Somewhere late in a long line of pages, you are still reading. Not the first text, not the last, one more page, and no one has asked how your reading is going.",
  "",
  "So here is a chair pulled out for you. The left arm is worn smooth, with one pale ring where a cup sat all last winter. Thank you for reading slowly.",
  "",
  "The next page will wait. When you stand, the chair will keep your warmth a little while.",
].join("\n") + "\n";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
console.log(`Wrote ${ENTRY_TEXT.length} characters to ${join(outputDir, "entry.txt")}`);
