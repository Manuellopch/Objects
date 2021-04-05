// Heredar Prototypes
function cliente (Nombre, Saldo){
     this.Nombre = Nombre;
     this.Saldo = Saldo;
}
//prototype que imprima saldo y nombre
cliente.prototype.ImprimirDatos = function(){
     return `Nombre: ${this.Nombre}, Tu saldo es de: ${this.Saldo}`;
}
const Cliente1 = new cliente('Manuel', 5000);
console.log(Cliente1.ImprimirDatos());
//heredar datos
function Empresa (Nombre, Saldo, Telefono, Tipo){
     cliente.call(this, Nombre, Saldo);
     this.Telefono = Telefono;
     this.Tipo = Tipo;
}
Empresa.prototype = Object.create(cliente.prototype);
const empresa = new Empresa('Facebook', 1000000, 52257191, 'RedSocial');
console.log(empresa);

