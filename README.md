# APP CUMPLEAÑOS

Pequeña aplicación con registro para poder crear lista con fechas de cumpleaños.
App creada con React Native compatible con dispositivos IOS y Android. 
Está hecha con el curso de udemy de "React Native: Crea aplicaciones móviles reales iOS y Android" de Agustín Navarro. 


![Imagen inicial de la App](https://media.giphy.com/media/cjF2YkiamjIexWtp06/giphy.gif)

### 💻Tecnologías utilizadas 

- React Native
- JavaScript
- Firebase
- NodeJS
- Android Studio (Emulador)


#### ✔️Funcionalidades 
- Inicio de la aplicación con un formulario de login, con validacion de errores si algún campo se encuentra vacío y comprobando si el usuario que se está intentando conectar está registrado anteriormente, mostrando un alert avisando de usuario no encontrado.
  
<div display="flex">
    <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/initApp.png">
    <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/errorEmptyLogin.png">
    <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/errorUserNotFound.png">
</div>

- Al pulsar el botón de Registro, te lleva a un formulario para poder registrarte como usuario, con validacion de errores si algún campo se encuentra vacío. 

<div display="flex">
    <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/registerForm.png">
    <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/errorFormRegister.png">
</div>

- Al acceder con un usuario registrado o creando un nuevo usuario, nos lleva a la página principal donde nos muestra la lista de cumpleaños que tenemos guardados posteriormente, si accedemos por primera vez, nos muestra una lista vacia. Además, tenemos una action barcon un botón para cerrar sesión y otro para añadir una nueva fecha.

<div display="flex">
    <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/listBirthdays.png">
    <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/listBirthdays2.png">
        <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/closeSession.png">
</div>

- Pulsando el botón 'Nueva Fecha' nos lleva a un formulario nuevo para añadir el nombre y el apellido de la persona que queremos añadir a la lista de cumpleaños, además al seleccionar en fecha de nacimiento se despliega un calendario para poder seleccionar la fecha.

<div display="flex">
    <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/addBirthday.png">
    <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/selecDate.png">
</div>

- Pulsando sobre cualquier cumpleaños, nos muestra un alert preguntando si queremos eliminar el cumpleaños seleccionado. Al pulsar 'Si', lo elimina de la base de datos.

<div display="flex">
    <img src="https://github.com/SandraLarrosa/Cotizador-de-Prestamos/blob/master/src/assets/images/appbirthdays/deleteBirthday.png">
</div>


#### Instalación 🔧
Necesitarás instalar 📋 Node.js y Android Studio para trabajar con este repositorio.



##### Descarga o clona el repositorio. ⚙️
```bash 
$ git clone https://github.com/SandraLarrosa/App-Birthays.git
```
Abre el proyecto en tu editor de codigo.

Instala las dependencias locales:
```bash
$ npm install
```
Arranca el proyecto en el emulador AVD de Android Studio:
```bash
$ npx react-native run-android
```

### *Autora*🌸
Proyecto realizado por Alexandra López Larrosa 🌠