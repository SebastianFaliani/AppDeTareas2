const fs = require("fs");

let leerArchivo = () => {
      let tareasJS = JSON.parse(fs.readFileSync("./app-tareas/tareas.json", { encoding: "utf-8" }));
      return tareasJS;
};

let escribirJSON = (arrayTareas) => {
      fs.writeFileSync("./app-tareas/tareas.json", JSON.stringify(arrayTareas), "utf-8");
};

let guardarTarea = (tarea) => {
      let array = leerArchivo();
      array.push(tarea);
      escribirJSON(array);
};

let filtrarPorEstado = (estado) => {
      let array = leerArchivo();
      let arrayFiltrado = array.filter((elem) => elem.estado === estado);
      return arrayFiltrado;
};

module.exports = { leerArchivo, guardarTarea, filtrarPorEstado };
