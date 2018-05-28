const Edad = (prompt("Que edad tienes?"));

switch (Edad!='undefined') {
    case (isNaN(Edad)):
        alert("Error,  Por favor ingrese un número");
        break;
    case (Edad % 1 != 0):
        document.write("Debe ingresar un número entero");
        break;
    case (Edad>= 1 && Edad <=3):
        document.write("La clasificacion de tu Edad es Toddler");
        break;
    case (Edad> 3 && Edad <=5):    
        document.write("La clasificacion de tu Edad es Preschool");
        break;
    case (Edad> 5 && Edad <=12): 
       document.write("La clasificacion segun tu Edad es Gradeschooler");
        break;
    case (Edad> 12 && Edad <=18): 
        document.write("La clasificacion de tu Edad es Teen");
        break;
    case (Edad> 18 && Edad >=21 ):
        document.write("La clasificacion de tu Edad es Young Adult");
        break;
    default:
        alert("Error! Debe ingresar un valor.");
    }
