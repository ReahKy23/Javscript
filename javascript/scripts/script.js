 let sect = document.querySelector('section');
    let para = document.createElement('p');
    para.textContent = "This is a paragraph";
    sect.appendChild(para);

    para.style.color = 'red';
    para.style.background = "yellow";
    para.style.padding = "10px";
    para.style.width = '250px';
    para.style.textAlign = 'center';




    let button = document.getElementById("button1");
    let button2 = document.getElementById("button2");

    button1.addEventListener("click", function () {
      document.body.style.background = "green";
    })


    button2.addEventListener("click", function () {
      document.body.style.background = "white";
    })