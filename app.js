const malbec = [];
const cabernet = [];

let chacabuco1 = {
    tipo: "malbec",
    cantidad: 0,
    minimo: 12,
}
malbec.push(chacabuco1);

let chacabuco2 = {
    tipo: "cabernet",
    cantidad: 0,
    minimo: 12,
}
cabernet.push(chacabuco2);

let conejoVerde = {
    tipo: "malbec",
    cantidad: 0,
    minimo: 12,
}
malbec.push(conejoVerde);

//inicializando variables
let inventChacabMalbec = 0
let inventConejVerdeMalbec = 0
let inventConeVerde = 0
let inventChacabCabernet = 0
let pregunta = ""
let adicionar = 0
let pregunta2 = ""

let tipoBebida = parseInt(prompt(`Ingrese tipo de vino a contabilizar:
                          1 Malbec
                          2 Cabernet`));
switch (tipoBebida) {
    case 1:
        let nombProducto = parseInt(prompt(`Ingrese el producto a contabilizar:
                                            1 Chacabuco
                                            2 Conejo verde`));
        if (nombProducto == 1) {
            inventChacabMalbec = parseInt(prompt("Cantidad Botellas en existencia: "))
            if (inventChacabMalbec <= malbec[0].minimo) {
                malbec[0].cantidad = inventChacabMalbec;
                    alert("El producto esta bajo de stock requerido, se recomienda hacer compra");
                    pregunta = prompt("Se realizó alguna compra de este producto s/n?");
                        if (pregunta == "s") {
                            adicionar = parseInt(prompt("Ingresar cantidad comprada:"));
                                malbec[0].cantidad = malbec[0].cantidad + adicionar;
                                alert("Cantidad de Botella Chacabuco Malbe es " + malbec[0].cantidad);
                        } else alert("debe realizar compra del producto Chacabuco Malbec para generar stoke minimo");
            } 
            else {
                malbec[0].cantidad = inventChacabMalbec;
                    alert ("Cantidad de Botella Chacabuco Malbec es " + malbec[0].cantidad );
            }    
            
        } 
        else if (nombProducto == 2) {
            inventConeVerde = parseInt(prompt("Cantidad Botellas en existencia: "));
                if (inventConeVerde <= malbec[1].minimo) {
                    malbec[1].cantidad = inventConeVerde;
                        alert("El producto esta bajo de stock requerido, se recomienda hacer compra");
                        pregunta = prompt("Se realizó alguna compra de este producto s/n?");
                            if (pregunta == "s") {
                                adicionar = parseInt(prompt("Ingresar cantidad comprada:"));
                                    malbec[1].cantidad = malbec[1].cantidad + adicionar;
                                    alert("Cantidad de Botella Conejo Verde Malbe es " + malbec[1].cantidad);
                            } else alert("debe realizar compra del producto Conejo Verde Malbec para generar stoke minimo");
                } else {
                     malbec[1].cantidad = inventConeVerde;
                         alert ("Cantidad de Botella Conejo Verde Malbec es " + malbec[1].cantidad );
                } 
            break; 
        }      
        
    case 2:
       
        inventChacabCabernet = parseInt(prompt("Cantidad Botellas en existencia: "));
        if (inventChacabCabernet <= malbec[0].minimo) {
            cabernet[0].cantidad = inventChacabCabernet;
                alert("El producto esta bajo de stock requerido, se recomienda hacer compra");
                pregunta = prompt("Se realizó alguna compra de este producto s/n?");
                    if (pregunta == "s") {
                        adicionar = parseInt(prompt("Ingresar cantidad comprada:"));
                        cabernet[0].cantidad = cabernet[0].cantidad + adicionar;
                            alert("Cantidad de Botella Chacabuco Malbe es " + cabernet[0].cantidad);
                    }
                    else{
                        alert("debe realizar compra del producto Chacabuco Malbec para generar stoke minimo");                    
                    } 
        }   
        else {
            cabernet[0].cantidad = inventChacabCabernet;
                alert ("Cantidad de Botella Chacabuco Malbec es " + cabernet[0].cantidad );
        } 

        break;
    
    default:
        alert("inventario terminado");
}
alert("inventario terminado");