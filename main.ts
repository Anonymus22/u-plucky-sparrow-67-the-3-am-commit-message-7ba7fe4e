import { mkdirSync, writeFileSync } from "node:fs";

// One-line 3 AM commit message: an AI agent narrating its own
// production outage with misplaced confidence.
const MESSAGE =
  "fix: at 3 AM I confidently rewrote the auth flow, broke login for everyone, and my self-review still rates the untested code 10/10";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
