// alert("hello");
function message(){
     var Name = document.getElementById('name');
     var email = document.getElementById('email');
     var mobile = document.getElementById('mobile');
     var msg = document.getElementById('msg');
     const success = document.getElementById('success');
     const danger = document.getElementById('danger');

     if(Name.value === ''  || email.value === '' || mobile.value === '' ||msg.value === ''){
        danger.style.display = 'block';
     }
     else{
        setTimeout(()=>{
            Name.value ='';
            email.value = '';
            mobile.value ='';
            msg.value = '';
        },2000);

        success.style.display = 'block';
     }

     setTimeout(()=>{
        danger.style.display ='none';
        success.style.display='none';
    },4000);

}

function sendEmail(){
   Email.send({
    Host : "smtp.elasticemail.com",
    Username : "balakaruppannan3@gmail.com",
    Password : "24C62B4B442CF722DD72C3C1A64AA08EA1B1",
    To : 'balakaruppannan3@gmail.com',
    From : 'balakaruppannan3@gmail.com',
    Subject : "This is the subject",
    Body : "Name:"+document.getElementById("name").value
    + "<br> Email:"+document.getElementById("email").value
    + "<br> Phone no:"+document.getElementById("mobile").value
    + "<br> Message:"+document.getElementById("msg").value
}).then(
  message => {
   if (message == "OK"){
      Swal.fire({
         title: "Success",
         text: "Message sent successfully!",
         icon: "success"
       });
   }
  }
);
}