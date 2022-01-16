let str="";
function startTime() {
    const today = new Date();
    let h= today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

   

    m = checkTime(m);
    s = checkTime(s);
    if(h>12)
    {
      document.getElementById("meridian").innerHTML="PM"

    }
    else if(h<12)
    {
      document.getElementById("meridian").innerHTML="AM"
    }
    if(h>=12){
        h=h-12;
    }
     str=h+":"+m+":"+s
    //  console.log(typeof str)
    //document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById('hour').innerHTML =h + ":";
    document.getElementById('minute').innerHTML =m +":"
    document.getElementById('second').innerHTML =s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

 
  // let e = document.getElementById("wakeup");
  // let f=document.getElementById("lunchid");
  // let g=document.getElementById("napid").value;
  const todaytime = new Date();
  let h1= todaytime.getHours();
  console.log("h is "+h1)


  $("#wakeup").change(function() {
    // $("#dummy").html($(this).val());
    console.log($(this).val())
    let wakeupStart=$(this).val()

    let wakeupEnd=(parseInt($(this).val())+1).toString()
    console.log("start"+wakeupStart)
    console.log("end"+wakeupEnd)

  if(h1==wakeupStart ||h1==0&&wakeupStart==24)
  {
  console.log("range satisfied")
  document.getElementById("image").src="./images/wakeup.png"
  document.getElementById("message").innerHTML="Good Morning";
  
  }
  else if(h1>wakeupStart && wakeupEnd)
  {
    console.log("else satisfied")
  }


});



$("#lunchid").change(function() {
  // $("#dummy").html($(this).val());
  console.log($(this).val())
  let lunchStart=$(this).val()

  let lunchEnd=(parseInt($(this).val())+1).toString()
  console.log("start"+lunchStart)
  console.log("end"+lunchEnd)

if(h1==lunchStart ||h1==0&&lunchStart==24)
{
console.log("range satisfied")
document.getElementById("image").src="./images/lunch.png"
document.getElementById("message").innerHTML="Have Lunch";

}
else if(h1>lunchStart && lunchEnd)
{
  console.log("else satisfied")
}


});

$("#napid").change(function() {
  // $("#dummy").html($(this).val());
  console.log($(this).val())
  let napStart=$(this).val()

  let napEnd=(parseInt($(this).val())+1).toString()
  console.log("start"+napStart)
  console.log("end"+napEnd)

if(h1==napStart ||h1==0&&napStart==24)
{
console.log("range satisfied")
document.getElementById("image").src="./images/goodnight.png"
document.getElementById("message").innerHTML="Good Night";

}
else if(h1>napStart && napEnd)
{
  console.log("else satisfied")
}


});

//   $("#lunchid").change(function() {
//     // $("#dummy").html($(this).val());
//     console.log($(this).val())
//     let lunchStart=$(this).val()
//     let lunchEnd=(parseInt($(this).val())+1).toString()
//     console.log("start"+lunchStart)
//     console.log("end"+lunchEnd)
// });
// $("#napid").change(function() {
//   // $("#dummy").html($(this).val());
//   console.log($(this).val())
// });
  
function adding(){

  


  // $("#wakeup").change(function() {
    
  //   console.log($(this).text())
  //   let wakeupStart1=$(this).text()

  //   let wakeupend1=(parseInt($(this).text())+1).toString()
  document.getElementById("set").style.display="contents"
    document.getElementById("sett").innerHTML="   Wake Up Time : "+$("#wakeup option:selected").text();

    // document.getElementById("set").style.display="contents"
    document.getElementById("sett2").innerHTML="   lunch time : "+$("#lunchid option:selected").text();

    // document.getElementById("set").style.display="contents"
    document.getElementById("sett3").innerHTML="   Nap Time : "+$("#napid option:selected").text();
  // });
//        const spant=document.createElement("div")
//        spant.setAttribute("class","sett")
//        spant.innerHTML="name"
//        const maindiv=document.getElementById("set")
//        maindiv.appendChild(spant)
//        console.log(maindiv);

      

      //  const spant1=document.createElement("div")
      //  spant1.setAttribute("class","sett2")
      //  spant1.innerHTML="name2"
      //  const maindiv1=document.getElementById("set")
      //  maindiv1.appendChild(spant1)
      //  console.log(maindiv1);

      //  const spant2=document.createElement("div")
      //  spant2.setAttribute("class","sett3")
      //  spant2.innerHTML="name3"
      //  const maindiv2=document.getElementById("set")
      //  maindiv2.appendChild(spant2)
      //  console.log(maindiv2);

      //  $(".but").click(function(){
    
      //   $("div").toggle()
    // })
  }
 