import fs from "fs";
import path from "path";

// List all files in the src/pages directory
try {
  const files = fs.readdirSync(path.join(process.cwd(), "src", "pages"));
  files.forEach((file) => {});
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

filesToCheck.forEach((file) => {
  console.log(` - ${file}: ${fs.existsSync(file) ? "EXISTS" : "NOT FOUND"}`);
});
