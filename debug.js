import fs from "fs";
const path = require("path");

// Show current directory
console.log("CURRENT DIRECTORY:", process.cwd());

// List all files in the src/pages directory
try {
  console.log("FILES IN SRC/PAGES:");
  const files = fs.readdirSync(path.join(process.cwd(), "src", "pages"));
  files.forEach((file) => {
    console.log(` - ${file}`);
  });
} catch (err) {
  console.error("Error reading directory:", err);
}

// Check if specific files exist
const filesToCheck = [
  "src/pages/homepage.jsx",
  "src/pages/HomePage.jsx",
  "src/pages/cartpage.jsx",
  "src/pages/contactpage.jsx",
  "src/pages/productpage.jsx",
];

console.log("CHECKING FOR SPECIFIC FILES:");
filesToCheck.forEach((file) => {
  console.log(` - ${file}: ${fs.existsSync(file) ? "EXISTS" : "NOT FOUND"}`);
});
