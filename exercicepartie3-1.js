//appel de l'Id, puis écoute des évenements 'passage de la souris' puis fonction
document.getElementById("image1").addEventListener("mouseover",function(){
//apparion de la bordure
  document.getElementById("image1").style.border= "9px solid red";
})
//appel de l'Id, puis écoute des évenements 'sortie de la souris de l'image' puis fonction
document.getElementById("image1").addEventListener("mouseout",function(){
//dispartion de la bordure
  document.getElementById("image1").style.border= "transparent";
})
