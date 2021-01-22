function MyFunction() {
  let day = document.getElementById("inp1").value;
  let age = document.getElementById("inp2").value;

  if (day == "saturday" || day == "sunday" & age > 18){
      document.getElementById("demo0").innerHTML = "Time to relax for the weekend!";
  }else if (day == "friday" & age > 18){
      document.getElementById("demo0").innerHTML = "Time to relax for the weekend!";
  } else{
      document.getElementById("demo0").innerHTML = "Time to go work!";
  }
}