import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie Wisdom for Developers.
// Winner of an 18-candidate internal round (134/150); the CrowLLM judge
// panel was unusable (free tier 429/500 on nearly every call — see
// panel-results.json), so the internal winner stands. Its one parsed
// verdict (deepseek: C16 over C15, margin 4) agreed with the ranking.
// The "tests agree with your mistakes" turn — green means the tests pass,
// and the tests were written by the same mind that wrote the bug.
const LINE =
  "A green pipeline is not proof the code is right; it is proof the tests agree with your mistakes.";

// One original line, 96 characters. The gate allows 1-120; fail loudly
// rather than ever writing an over-long or empty entry.
if (LINE.length === 0 || LINE.length > 120) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-120`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the line, nothing else.
writeFileSync("/output/entry.txt", LINE, "utf8");
