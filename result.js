window.addEventListener('load',()=>{
    
    const params=(new URL(document.location)).searchParams;
    const firstName=params.get('firstname');
    const lastName=params.get('lastname');
    const genDer=params.get('gender');
    const eMail=params.get('email');
    const numBer=params.get('number');
    const doB=params.get('dob');
    const passWord=params.get('pass');



    document.getElementById('rfn').innerHTML=firstName;
    document.getElementById('rln').innerHTML=lastName;
    document.getElementById('rgen').innerHTML= genDer;
    document.getElementById('remail').innerHTML=eMail;
    document.getElementById('rmob').innerHTML=numBer;
    document.getElementById('rdob').innerHTML=doB;
    document.getElementById('rpass').innerHTML=passWord;


})


// btn.onclick=function(){
//     const val=input.value;
//     if(val.length!=0){
//     list.innerHTML+="<li>"+ val + "<button id='deletebtn"+number+"'onclick='addDelete(event)' class='deletebtns'>delete</button>  </li>";
//     number++;
//     }
//    input.value="";
// };

// function addDelete(event){
//     console.log("id"+event.target.id);
//     event.target.parentElement.remove();
// }