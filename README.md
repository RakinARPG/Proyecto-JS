# Proyecto - Módulo JavaScript

## Descripción

Aplicación de consola desarrollada en JavaScript como proyecto final del módulo.

La aplicación permite al usuario interactuar mediante un menú utilizando `prompt` y `alert`, ofreciendo distintas funcionalidades relacionadas con operaciones matemáticas y manipulación de datos.

---

## Funcionalidades

1. Calculadora básica:
   - Suma
   - Resta
   - Multiplicación
   - División (con validación de división por cero)

2. Cálculo de promedio:
   - Permite ingresar múltiples notas separadas por coma
   - Valida datos incorrectos
   - Verifica que los valores ingresados sean numéricos

3. Generador de perfil:
   - Crea un objeto con nombre, edad y profesión
   - Incluye un método interno que devuelve una presentación personalizada
   - Valida que la edad sea un número

4. Filtro de números:
   - Devuelve los números mayores a 10
   - Utiliza el método `filter()`
   - Filtra valores inválidos antes de procesar

---

## Tecnologías utilizadas

- HTML5
- JavaScript
- Métodos de arrays (`map`, `filter`)
- Estructuras de control (`while`, `switch`, `if`)
- Funciones
- Objetos y métodos
- Validación de datos
- Uso de `console.log()` para seguimiento y debugging

---

## Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio
2. Abrir el archivo `index.html` en el navegador
3. Interactuar mediante los cuadros de diálogo que aparecen en pantalla
4. Revisar la consola del navegador para ver los `console.log()` del funcionamiento interno

---

## 📊 Breve documentación y análisis del proyecto

### Estructura del código

El proyecto fue organizado de forma modular, separando cada funcionalidad en funciones independientes:

- `hacerCuentas()` → Maneja las operaciones matemáticas.
- `sacarPromedio()` → Calcula el promedio de una lista de números.
- `armarPerfil()` → Crea un objeto con propiedades y un método interno.
- `limpiarLista()` → Filtra números mayores a 10 dentro de un array.

El menú principal se ejecuta mediante un bucle `while`, permitiendo que el usuario realice múltiples operaciones hasta seleccionar la opción de salida.

---

### Validaciones implementadas

Se agregaron controles para garantizar un funcionamiento correcto:

- Verificación de valores numéricos usando `isNaN()`
- Control de división por cero
- Validación de listas vacías
- Manejo de cancelaciones de `prompt`
- Filtrado de valores inválidos en arrays
- Validación de edad como número en el perfil

Estas validaciones permiten evitar errores comunes y mejorar la robustez del programa.

---

### Conceptos aplicados

Durante el desarrollo se aplicaron los siguientes conceptos del módulo:

- Declaración y uso de funciones
- Parámetros y retorno de valores
- Objetos y métodos
- Bucles (`while`, `for`)
- Condicionales (`if`, `switch`)
- Métodos de arrays (`map`, `filter`)
- Conversión de tipos (`parseFloat`)
- Debugging mediante `console.log()`

---

### Posibles mejoras futuras

- Reemplazar `prompt` y `alert` por una interfaz gráfica utilizando el DOM
- Migrar la aplicación a Node.js para ejecutarla como aplicación de consola real
- Implementar almacenamiento de datos
- Agregar pruebas unitarias
- Mejorar la experiencia de usuario con validaciones más dinámicas

---

## Capturas

### Screenshot 1
![Screenshot 1](screenshots/SS1.png)

### Screenshot 2
![Screenshot 2](screenshots/SS2.png)

---

## 📚 Autor

Francisco Soto