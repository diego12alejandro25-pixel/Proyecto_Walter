let listaTareas = [
  {
    id: 1,
    titulo: "Aprender JavaScript",
    prioridad: "Alta", // Puede ser: "Alta", "Media", "Baja"
    completada: false,
  },
];

let tabla_tareas = document.getElementById("tabla_tareas");

function listarTareas() {
  tabla_tareas.innerHTML = "";
  listaTareas.forEach((tarea) => {
    let estado = tarea.completado
    ? '<span class="badge bg-primary">Completada</span>'
    : '<span class="badge bg-warning">Pendiente</span>';

    // let estado;
    // if (tarea.completada) {
    //   estado = '<span class="badge bg-primary">Completada</span>';
    // } else {
    //   estado = '<span class="badge bg-warning">Pendiente</span>';
    // }
    let fila = `<tr><td>${tarea.id}</td><td>${tarea.titulo}</td><td>${tarea.prioridad}</td><td>${estado}</td></tr>`;
    tabla_tareas.innerHTML += fila;
  });
}

function agregarTarea() {
  let numero_tarea = document.getElementById("numero_tarea").value;
  let titulo_tarea = document.getElementById("titulo_tarea").value;
  let prioridad_tarea = document.getElementById("prioridad_tarea").value;

  /* Clono el arreglo de objetos=lista de tareas y agrego un elemento: objeto*/
  /*inmutabilidad: */
  listaTareas = [
    ...listaTareas,
    {
      id: numero_tarea,
      titulo: titulo_tarea,
      prioridad: prioridad_tarea,
      completada: false,
    },
  ];

  listarTareas();
}


function completarTarea() {
  let codigo = document.getElementById("codigo_tarea").value;
  //inmutabilidad 100%
  listaTareas = listaTareas.map((tarea) => {
    if (tarea.id == codigo) {
      return { ...tarea, completada: true };
    }
    return tarea;
  });
  listarTareas();
}

function cambiarPrioridad() {
  let codigo = document.getElementById("codigo_tarea").value;
  let nuevaPrioridad = document.getElementById("nueva_prioridad").value;
  //Clonamos objeto para aplicar inmutabilidad
  listaTareas = listaTareas.map((tarea) => {
    if (tarea.id == codigo) {
      return { ...tarea, prioridad: nuevaPrioridad };
    }
    return tarea;
  });
  listarTareas();
}

function filtrarPendientes() {
    //clonamos el obj
  listaTareas = listaTareas.filter((tarea) => tarea.completada == false);
  listarTareas();
}

listarTareas(); 

function verprioridad()
{
      let Prioridad = document.getElementById("nueva_prioridad").value;
      listaTareas = listaTareas.filter((tarea) => tarea.prioridad == Prioridad);
  listarTareas();
}