/* The above code is creating a function that toggles the dark-theme class on the body element. It also
changes the image source of the darkMode element. */
export const darkMode = document.getElementById("darkMode");

darkMode.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    darkMode.src = "./assets/sun.png";
  } else {
    darkMode.src = "./assets/moon.png";
  }
};

export const grande = document.querySelector(".grande");
export const punto = document.querySelectorAll(".point");

//Recorremos todos los puntos
punto.forEach((cadaPunto, i) => {
  //Asignamos el click a cada punto
  punto[i].addEventListener("click", () => {
    let posicion = i;
    //Calculamos el espacio que debe desplazarse el div grande
    let operacion = posicion * -50;
    //Movemos el el div grande
    grande.style.transform = `translateX(${operacion}%)`;
    //Movemos todos los puntos
    punto.forEach((cadaPunto, i) => {
      //Quitamos la clase active a todos los puntos
      punto[i].classList.remove("active");
    });
    //Añadimos la clase active en el punto que le hacemos click
    punto[i].classList.add("active");
  });
});
