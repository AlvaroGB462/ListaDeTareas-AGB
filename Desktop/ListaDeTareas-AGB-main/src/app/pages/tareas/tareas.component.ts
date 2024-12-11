import { Component, OnInit } from '@angular/core';
import { Tarea, TareaService } from '../../services/tarea.service';
import { FormsModule } from '@angular/forms';
import { CategoriasComponent } from '../categorias/categorias.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  imports: [FormsModule, CategoriasComponent],
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  categoria: string = 'Personal';
  tareaEditada: Tarea | null = null;
  mostrarCompletadas: boolean = false; // Estado para alternar la vista de tareas
  mensaje: string | null = null;

  constructor(private tareaService: TareaService) {}

  // Frase que se enviará al componente Categorias
  frase: string = '¿Por qué usar esta lista de tareas?';

  ngOnInit(): void {
    this.mostrarTareas(); // Cargar tareas al inicio
  }

  // Propiedad para obtener solo las tareas completadas
  get tareasCompletadas(): Tarea[] {
    return this.tareas.filter((tarea) => tarea.completada);
  }

  // Alternar entre mostrar todas las tareas o solo las completadas
  toggleCompletadas(): void {
    this.mostrarCompletadas = !this.mostrarCompletadas;
  }

  // Método que recibe un string (la categoría seleccionada) desde el componente hijo
  recibirCategoriaSeleccionada(categoria: string): void {
    this.mensaje = `Categoría seleccionada: ${categoria}`; // Asigna el string recibido al mensaje
  }

  // Mostrar todas las tareas
  mostrarTareas(): void {
    this.tareaService.obtenerTareas().subscribe((data) => {
      this.tareas = data;
    });
  }

  // Agregar una nueva tarea
  agregarTarea(): void {
    if (this.nuevaTarea) {
      const nuevaTarea: Tarea = {
        id: '', // El id se asignará automáticamente en el servicio
        nombre: this.nuevaTarea,
        categoria: this.categoria,
        completada: false,
      };

      this.tareaService.agregarTarea(nuevaTarea).subscribe(() => {
        this.mostrarTareas();
        this.nuevaTarea = ''; // Limpiar el campo de entrada
      });
    }
  }

  // Marcar una tarea como completada o no completada
  completarTarea(id: string, completada: boolean): void {
    this.tareaService.completarTarea(id, !completada).subscribe(() => {
      this.mostrarTareas(); // Actualizar la lista después de cambiar el estado de completada
    });
  }

  // Eliminar una tarea
  eliminarTarea(id: string): void {
    this.tareaService.eliminarTarea(id).subscribe(() => {
      this.mostrarTareas(); // Actualizar la lista después de eliminar una tarea
    });
  }

  // Editar una tarea (modificar)
  editarTarea(tarea: Tarea): void {
    this.tareaEditada = { ...tarea }; // Guardamos una copia de la tarea para editarla
  }

  // Guardar las modificaciones de una tarea
  guardarModificaciones(): void {
    if (this.tareaEditada) {
      this.tareaService.modificarTarea(this.tareaEditada).subscribe(() => {
        this.mostrarTareas(); // Actualizar la lista de tareas después de la modificación
        this.tareaEditada = null; // Limpiar el formulario de edición
      });
    }
  }
}
