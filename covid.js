console.log("working");

const date = document.getElementById("date");
const confirm = document.getElementById("confirm");
const active = document.getElementById("active");
const recover = document.getElementById("recover");
const decrease = document.getElementById("decrease");
const d = new Date()
date.innerHTML = d;

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.covid19india.org/data.json");

/*xhr.onprogress = function() {
  console.log('On progress');
}

xhr.onreadystatechange = function () {
  console.log('ready state is ', this.readyState);
}*/

xhr.onload = function () {
  if (this.status == 200) {
    let res = JSON.parse(this.responseText).statewise;
    confirm.innerHTML = res[0].confirmed;
    active.innerHTML = res[0].active;
    recover.innerHTML = res[0].recovered;
    decrease.innerHTML = res[0].deaths;
    let html = "";
    res.map((elem, index) => {
      //console.log(elem);
      html += `<tr>
      <th>${elem.state}</th>
      <td>${elem.confirmed}</td>
      <td>${elem.active}</td>
      <td>${elem.recovered}</td>
      <td>${elem.deaths}</td>
      </tr>`
      //html += `<p>State: ${elem.state} Confirmed: ${elem.confirmed}</p>`;
    });
    document.getElementById("main").innerHTML = html;
  } else {
    console.error("some errror occur");
  }
};

xhr.send();