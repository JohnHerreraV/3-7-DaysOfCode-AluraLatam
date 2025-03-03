// Elección hacia el área de Front-End o seguir hacia el área de Back-End.

const areaDeFormacion = prompt("Elige una de las siguienes áreas para continuar tu formación: Front-End o Back-End")

// Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, 
// podrá aprender C# o aprender Java.

let lenguaje1 = ""
let lenguaje2 = ""

if (areaDeFormacion === "Front-End"){
    lenguaje1 = prompt ("¿Quieres aprender nuevos concimientos en React o aprender Vue?")
}else if (areaDeFormacion === "Back-End") { 
    lenguaje2 = prompt("Quieres aprender nuevos concimientos en C# o aprender Java?")
}else {
    alert("¡No ingresaste un área válida!")
}

// Independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir 
// especializándose en el área elegida o desarrollarse para convertirse en Fullstack. 
// Debes mostrar en pantalla un mensaje específico para cada elección.

const especialidad = prompt (`Si deseas especilizarte en el área de ${areaDeFormacion} escribe 1, de lo contrario, si deseas ser Fullstack escribe 2`)
if (especialidad ==="1"){
    alert (`Continua especializandote en ${areaDeFormacion} en el lenguaje ${lenguaje1} `)
}else if (especialidad ==="2"){
    alert (`Continua especializandote en ${areaDeFormacion} y aprende nuevos lenguajes como el que ya sabes ${lenguaje2}`)
} else {
    alert("¡No ingresaste un valor válido!");
}

//Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede 
// responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta:
//  "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el 
// nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología 
// ingresada.

let nuevasTecnologias = []
let pregunta = prompt ("Te gustaría conocer nuevas técnologias? Ingresa la palara Ok")
while(pregunta === "Ok"){
    nuevasTecnologias = prompt("¿Cúal técnologia deseas aprender?")
    alert ("Es un lenjuage interesante")
    pregunta = prompt("¿Alguna otra tecnología que te gustaría aprender? Ingresa la palara Ok");
}
 