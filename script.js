function fun() {
    var x = document.getElementById("div1")
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var btn1 = document.getElementById('btn1');


      if(btn1.textContent == '⬇️')
      {
        btn1.textContent = '⬆️';
      }else
        {
          btn1.textContent = '⬇️';
        }


  }


  function fun2()
  {
  var x1 = document.getElementById("div2")
  if (x1.style.display === "none") {
    x1.style.display = "block";
  } else {
    x1.style.display = "none";
  }
  var btn2 = document.getElementById('btn2');


    if(btn2.textContent == '⬇️')
    {
      btn2.textContent = '⬆️';
    }else
      {
        btn2.textContent = '⬇️';
      }
}

  function fun3()
  {
  var x2 = document.getElementById("div3")
  if (x2.style.display === "none") {
    x2.style.display = "block";
  } else {
    x2.style.display = "none";
  }
  var btn3 = document.getElementById('btn3');


    if(btn3.textContent == '⬇️')
    {
      btn3.textContent = '⬆️';
    }else
      {
        btn3.textContent = '⬇️';
      }
}
