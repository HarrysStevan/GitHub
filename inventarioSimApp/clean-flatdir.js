const fs = require("fs");
const path = require("path");

const gradleFilePath = path.resolve(
  __dirname,
  "android/capacitor-cordova-android-plugins/build.gradle"
);

// Leer el archivo y eliminar flatDir
fs.readFile(gradleFilePath, "utf8", (err, data) => {
  if (err) return console.error(err);

  // Remover flatDir
  const result = data.replace(/flatDir\s*\{[^}]*\}/g, "");

  // Escribir cambios
  fs.writeFile(gradleFilePath, result, "utf8", (err) => {
    if (err) console.error(err);
  });
});
