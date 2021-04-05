// object literal
/*const clientes = {
     nombre: 'Manuel',
     saldo: 300,
     TipoSaldo: function(){
          let tipo;
          if(this.saldo > 1000){
               tipo = 'Gold';
          }else{
               tipo = 'Normal';
          }
          return tipo;
     }
}
console.log(clientes.TipoSaldo());*/
//Metodo Alternativo
function clientes(Nombre, Saldo){
     this.Nombre = Nombre;
     this.Saldo = Saldo;
     this.tipocliente = function(){
          let tipo;
          if(this.Saldo > 1000){
               tipo = 'Gold';
          }else if(this.Saldo > 500){
               tipo = 'Platinum';
          }else {
               tipo = 'Bronce'
          }
          return tipo;
     }
}
const persona = new clientes('Marco', 5000);
console.log(persona.tipocliente());