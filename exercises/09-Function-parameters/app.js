// Your code goes here:
function renderPerson(name,date,eyes,age,genre) {
  let mensaje = name+" is a "+age+" years old "+genre+" born in "+date+" with "+eyes+" eyes"; //Bob is a 23 years old male born in 05/22/1983 with green eyes
  return mensaje;
}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));