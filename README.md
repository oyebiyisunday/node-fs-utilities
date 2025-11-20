# Node FS Utilities

A collection of Node.js command-line utilities for asynchronous filesystem operations and minimal JSON manipulation.

## Features

### Asynchronous File Tools

- **Count newlines in a file:**  
  Run: `node asyncNewlines.js <filePath>`  
  Example:  
  ```bash
  node asyncNewlines.js ./data/example.txt
  ```

- **Count files by extension in a directory:**  
  Run: `node asyncFileCount.js <dirPath> <extension>`  
  Example:  
  ```bash
  node asyncFileCount.js . .js
  node asyncFileCount.js ./data .txt
  ```

### JSON + Lodash Utility

- **Comment data analysis:**  
  Run: `node reddit.js <jsonFilePath>`  
  Example:  
  ```bash
  node reddit.js ./data/redditData.json
  ```
  Output includes:
  1. All usernames (with repeats)
  2. Comments grouped by username
  3. Unique usernames
  4. Sorted JSON array by username

## Project Structure
```
node-fs-utilities/
├── asyncNewlines.js
├── asyncFileCount.js
├── reddit.js
├── data/
│   ├── example.txt
│   └── redditData.json
├── package.json
├── .gitignore
└── README.md
```

## Installation
```bash
git clone https://github.com/<owner>/node-fs-utilities.git
cd node-fs-utilities
npm install         # (reddit.js requires lodash)
```

## Testing Tips

- Place sample files in `data/` (e.g. `example.txt`, `redditData.json`).
- Test extensions counting with mixed files in sampled folders.
- Use JSON comment samples for Lodash analysis.

## Dependencies

| Package | Used In   | Purpose                                |
| ------- | --------- | -------------------------------------- |
| lodash  | reddit.js | Utility functions for grouping, sorting |

## Notes

- Scripts use asynchronous Node.js methods for non-blocking behavior.
- Minimal CLI output, suitable for scripting and pipelines.
- Intended as building blocks for larger Node.js CLI utilities.

## Contributing

PRs for new utilities, refactoring, and doc improvements welcome!
