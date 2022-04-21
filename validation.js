
// const firstName = document.getElementById('fn').value;
// const phoneNum = document.getElementById("pno").value;
// console.log(firstName);

function isvalidname() {
    const firstName = document.getElementById('fn');
    // const fn=
    const letter=/^[a-zA-Z]*$/;
  if (firstName.value === '' ) {
    document.getElementById("err1").innerHTML=
      " ** please fill the first name field";
  }
  else if (!firstName.value.match(letter)){
    document.getElementById("err1").innerHTML=
      " ** please fill only alphabet";
  }
  // console.log("test",firstName.value);
}

function isvalidmail() {
  const mail= document.getElementById('email');
  const reg =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (mail.value === '' ) {
    document.getElementById("err2").innerHTML=
      " ** please fill the Email field";
  }
  else if (!mail.value.match(reg)){
    document.getElementById("err2").innerHTML=
      " ** Incorrect format";
  }

}


function isvalidphone(){
  const phoneNum= document.getElementById('number');
  // console.log("test"+ phoneNum.value.charAt(0));
  if (phoneNum.value === '') {
        document.getElementById("err3").innerHTML =
          " **Phone number should not be empty";
      }
      
      else if(phoneNum.value.length < 10 || phoneNum.value.length > 10){
        document.getElementById("err3").innerHTML =
        " **Phone number should be of length 10";
      }
      else if( (phoneNum.value.charAt(0)!=9) && (phoneNum.value.charAt(0)!=8) && (phoneNum.value.charAt(0)!=7)){
        document.getElementById("err3").innerHTML =
        " **Phone number should start from 9 or 8 or 7";
      }

}

function isvalidpass(){
  const pass= document.getElementById('pass').value;
  if (pass === '') {
    document.getElementById("err4").innerHTML =
      " **Password should not be empty";
  }
  else if(pass.length < 8){
    document.getElementById("err4").innerHTML =
    " **Password should be of length greater than 8";
  }

}
function issamepass(){
  const pass= document.getElementById('pass').value;
  const cpass= document.getElementById('repass').value;

  if(cpass!=pass){
    document.getElementById("err5").innerHTML =
    " **Password doesn't match";
  }

}

