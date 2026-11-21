import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINES: string[] = [
  "When I was small I would not walk the dark hall alone.",
  "So my grandmother peeled an orange, one long curl, and waited.",
  "The light thinned down the hall.",
  "Her hand found my shoulder.",
  "We walked it together, slow, the orange sweet on her breath, and the dark was just a hall.",
];

// Output contract: writes exactly this text to /output/entry.txt, UTF-8,
// with no trailing newline (269 characters / 269 bytes). The joined lines
// are the entry verbatim; nothing may be appended or trimmed.
const ENTRY_TEXT: string = ENTRY_LINES.join("\n");

const OUTPUT_DIR: string = "/output";
const ENTRY_FILE: string = OUTPUT_DIR + "/entry.txt";

function writeEntry(text: string, dir: string, file: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(file, text, { encoding: "utf8" });
}

writeEntry(ENTRY_TEXT, OUTPUT_DIR, ENTRY_FILE);
