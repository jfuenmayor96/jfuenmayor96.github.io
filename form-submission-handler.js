
/* Expresion regular para validar el formato del correo. Espera: nombre@compania.dominio */
function validEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function validPhone(phone) {
  var re = /^(\+{0,1}[0-9]+([\-][0-9]+)*)$/i;
  return re.test(phone);
}

// Obtiene toda la informacion del form y devuelve un objeto que la contiene
function getFormData() {
  var elements = document.getElementById("gform").elements; // Obtiene los elementos del form con id 'gform'
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
                  // it to be appended to for each item in the loop
    if(elements[k].type === "checkbox"){ // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append 
                                              // the current checked value to 
                                              // the end of it, along with 
                                              // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space 
                                  // from the  string to make the output 
                                  // prettier in the spreadsheet
    }else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });
  // console.log(data);
  document.getElementById('submit-button-1').style.pointerEvents = 'none';
  document.getElementById('submit-button-1').style.backgroundColor = '#cccccc';
  document.getElementById('submit-button-1').style.color = '#666666';
  return data;
}

function handleFormSubmit(event) {  // handles form submit withtout any jquery
  event.preventDefault();           // we are submitting via xhr below
  var data = getFormData();         // get the values submitted in the form
  // console.log(data);
  
  if( data.Contacto == "" ) {
    document.getElementById('alertaContacto').style.display = "inherit";
    document.getElementById('Contacto').value = "";
    document.getElementById('submit-button-1').style.pointerEvents= 'auto';
    document.getElementById('submit-button-1').style.backgroundColor= '#202957';
    document.getElementById('submit-button-1').style.color = 'white';
    return false;
  } 
  else {
    document.getElementById('alertaContacto').style.display = "none";
  }
  if(!validPhone(data.Telefono)) {   
    document.getElementById('alertaTlfo').style.display = "inherit";
    document.getElementById('Telefono').value = "";
    document.getElementById('submit-button-1').style.pointerEvents= 'auto';
    document.getElementById('submit-button-1').style.backgroundColor= '#202957';
    document.getElementById('submit-button-1').style.color = 'white';
    return false;
  } 
  else {
    document.getElementById('alertaTlfo').style.display = "none";
  }
  if( !validEmail(data.Email) ) {   
    document.getElementById('alertaCorreo').style.display = "inherit";
    document.getElementById('email').value = "";
    document.getElementById('submit-button-1').style.pointerEvents= 'auto';
    document.getElementById('submit-button-1').style.backgroundColor= '#202957';
    document.getElementById('submit-button-1').style.color = 'white';
    return false;
  } 
  else {
    document.getElementById('alertaCorreo').style.display = "none";
  }
  if( data.Mensaje == "" ) {
    document.getElementById('alertaMensaje').style.display = "inherit";       
    document.getElementById('mensaje').value = "";
    document.getElementById('submit-button-1').style.pointerEvents= 'auto';
    document.getElementById('submit-button-1').style.backgroundColor= '#202957';
    document.getElementById('submit-button-1').style.color = 'white';
    return false;
  }
  else {
    document.getElementById('alertaMensaje').style.display = "none";
  }
  if (!grecaptcha.getResponse()) {
    document.getElementById('captchaMessage').style.display = "inherit";
    document.getElementById('submit-button-1').style.pointerEvents= 'auto';
    document.getElementById('submit-button-1').style.backgroundColor= '#202957';
    document.getElementById('submit-button-1').style.color = 'white';
    return false;
  }   
  else {
    document.getElementById('captchaMessage').style.display = "none";
    var url = event.target.action;  //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        // console.log( xhr.status, xhr.statusText )
        // console.log(xhr.responseText);
        document.getElementById('popup1').style.display = 'inherit';
        document.getElementById('popup1').style.opacity = '1';
        document.getElementById('popup1').style.zIndex = '99999999';
        $("#close-btn").click(function(){
          document.getElementById('popup1').style.display = 'hidden';
          document.getElementById('popup1').style.opacity = '0';
          document.getElementById('popup1').style.zIndex = '-1';
        });
        document.getElementById('gform').reset();

        document.getElementById('submit-button-1').style.pointerEvents= 'auto';
        document.getElementById('submit-button-1').style.backgroundColor= '#00AB99';
        document.getElementById('submit-button-1').style.color = 'white';

        $("#Empresa").attr("placeholder", "Mi Empresa");
        $("#Contacto").attr("placeholder", "John Doe");
        $("#Telefono").attr("placeholder", "+584141234567");
        $("#email").attr("placeholder", "usuario@correo.com");
        $("#mensaje").attr("placeholder", "Ingrese su mensaje acá.");
        document.getElementById('alertaContacto').style.display = "hidden";
        document.getElementById('alertaTlfo').style.display = "hidden";
        document.getElementById('alertaCorreo').style.display = "hidden";
        document.getElementById('alertaMensaje').style.display = "hidden";       
        document.getElementById('captchaMessage').style.display = "hidden";

        //document.getElementById('thankyou_message').style.display = 'block';
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }
}
function loaded() {
  console.log('contact form submission handler loaded successfully');
  // bind to the submit event of our form
  var form = document.getElementById('gform');
  form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);
