// Основний модуль
import gulp from "gulp";

// Імпорт шляхів
import { path } from "./gulp/config/path.js";

// Передаємо значення у глобальну змінну
global.app = {
  path: path,
  gulp: gulp,
};

// Імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";

//Спостерігач за змінами у файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
}

//Побудова сценаріїв виконання задач
const dev = gulp.series(reset, copy, watcher);

// Виконання сценарію за замовченням
gulp.task("default", dev);
