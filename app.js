class Pojistenec {
  constructor(jmeno, prijmeni, vek, tel) {
    this.jmeno = jmeno;
    this.prijmeni = prijmeni;
    this.vek = vek;
    this.tel = tel;
  }
}


const databaze = [];
function addUser(form) {
  databaze.push(
    new Pojistenec(
      form.jmeno.value,
      form.prijmeni.value,
      form.vek.value,
      form.tel.value,
    )
  );
  renderUserList();
}

function renderUserList() {
  const tbody = document.querySelector("#userList tbody");
  tbody.innerHTML = "";

  for (const user of databaze) {
    const row = document.createElement("tr");
    [user.jmeno + " " + user.prijmeni, user.tel, user.vek].forEach(
      (text) => {
        const td = document.createElement("td");
        td.innerText = text;
        row.appendChild(td);
      }
    );
    tbody.appendChild(row);
  }
}

function showPage(pageId) {
  for (const page of document.querySelectorAll(".page")) {
    if (page.id == pageId) {
      page.classList.remove("hidden");
      page.classList.add("active");
    } else {
      page.classList.remove("active");
      page.classList.add("hidden");
    }
  }
}