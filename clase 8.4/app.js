// La funcion Object Create
const cliente = {
     ImprimirSaldo: function() {
          return `hola ${this.Nombre}, su saldo es de: ${this.Saldo}`;
     },
     RetirarSaldo: function(retiro){
          return this.Saldo -= retiro;
     }
}
//crear objeto
const mary = Object.create(cliente);
mary.Nombre = 'Mary';
mary.Saldo = 1000;

mary.RetirarSaldo(300);
console.log(mary);

