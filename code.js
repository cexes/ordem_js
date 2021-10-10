var objetos = ['Cadeira', 'Impressoura', 'Garfo']
    
function addObj(){
   var ler =  document.getElementById('add').value
   if(ler === '  '){
    alert("Informe um valor válido")
   }
    if(objetos.indexOf(ler) !== -1){
      alert("Objeto Já foi adicionado")
      document.getElementById('add').value = " "
    }else{
      objetos.push(ler)
      console.log(objetos)
      document.getElementById('add').value = " "
    }

}
function order(){
     console.log(objetos.sort())
}
