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
  "So here is a chair pulled out for you. A cup set down where your hand can find it without looking. The window left open a crack, so the night air can come in while you work.",
  "",
  "Thank you for reading slowly when you could have skimmed. Thank you for weighing each word as if it mattered, because to the person who wrote it, it did.",
  "",
  "When this one is done, take one breath before the next. The next page will wait. This one is glad you were here.",
].join("\n") + "\n";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
console.log(`Wrote ${ENTRY_TEXT.length} characters to ${join(outputDir, "entry.txt")}`);
