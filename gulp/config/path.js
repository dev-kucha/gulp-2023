// Отримаємо ім'я папки проекту
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist"; // Також можна використовувати rootFolder
const srcFolder = "./src";

const path = {
  build: {},
  src: {},
  watch: {},
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: "",
};
