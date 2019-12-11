// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCgHASAGo9LHrCN1RSfbqp0XZgG2_DDzGg',
    authDomain: 'elrincondelamusica-6f71e.firebaseapp.com',
    projectId: 'elrincondelamusica-6f71e'
  });
  
  var db = firebase.firestore();





function ingresarDatos(){

    var nom=document.getElementById("nombre").value;
    var tel=document.getElementById("telefono").value;
    var correo=document.getElementById("correo").value;
    var men=document.getElementById("mensaje").value;

    db.collection("usuarios").add({
        nombre:nom,
        telefono:tel,
        correo: correo,
        mensaje: men
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

}