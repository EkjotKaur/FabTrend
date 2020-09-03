const fullname = (event) => {
  let output;
  if(event.target.value.length< 3){
    output = `<p>Name should be longer</p>`;
    document.getElementById("error").style.display = "block";
  }
  else{
    output="";
    document.getElementById("error").style.display = "none";
  }
  document.getElementById("error").innerHTML = output;
}
const telno = (event) => {
  let output;
  if(event.target.value.length!==10){
    output = `<p>Phone number should be 10 digits long</p>`;
    document.getElementById("error").style.display = "block";
  }
  else{
    output="";
    document.getElementById("error").style.display = "none";
  }
  document.getElementById("error").innerHTML = output;
}
const queryplss = (event) => {
  let output;
  console.log(event.target.value.length);
  if(event.target.value.length<50){
    output = `<p>Query is very short. It should contain atleast 50 Characters. Please explain in detail</p>`;
    document.getElementById("error").style.display = "block";
  }
  else{
    output="";
    document.getElementById("error").style.display = "none";
  }
  document.getElementById("error").innerHTML = output;
}