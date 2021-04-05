// Prototypes JavaScript
function cliente (Nombre, Saldo){
     this.Nombre = Nombre;
     this.Saldo = Saldo;
}
//crear un Prototype
cliente.prototype.tipoCliente = function(){
     let tipo;
     if(this.Saldo > 1000){
          tipo = 'Gold';
     }else if (this.Saldo > 500){
          tipo = 'Platinum';
     }else{
          tipo = 'Bronce';
     }
     return tipo;
}
//prototype que imprima saldo y nombre
cliente.prototype.ImprimirDatos = function(){
     return `Nombre: ${this.Nombre}, Tu saldo es de: ${this.Saldo},
     Tu tipo de saldo es: ${this.tipoCliente()}`;
}
cliente.prototype.RetirarSaldo = function(retiro){
     return this.Saldo -= retiro;
} 
const Cliente1 = new cliente('Manuel', 5000);
const Cliente2 = new cliente('Leonel', 600);
const Cliente3 = new cliente('Andrea', 100);
Cliente3.RetirarSaldo(50);
console.log(Cliente1.ImprimirDatos());
console.log(Cliente2.ImprimirDatos());
console.log(Cliente3.ImprimirDatos());