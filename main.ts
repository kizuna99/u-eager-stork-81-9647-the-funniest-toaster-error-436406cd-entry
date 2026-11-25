// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// Final: tightened after tournament refinement rounds 1-4 (see ../NOTES.md).
// The smoke alarm is the only witness the toaster will name; every word earns its place.
const MESSAGE =
  "ERROR: You set me to 6 and looked away. The smoke alarm knows the rest.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
