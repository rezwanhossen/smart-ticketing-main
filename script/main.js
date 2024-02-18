function goto() {
  const section = document.getElementById("bus-tekit");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
let count = 0;
const sites = document.getElementsByClassName("site");
for (const site of sites) {
  const btn = site.addEventListener("click", function () {
    count = count + 1;
    if (count > 4) {
      alert("you are not select another site");
      return;
    } else {
      site.style.backgroundColor = "#1DD100";
      const addSiteCount = (document.getElementById("tikit-count").innerText =
        count);
      const curentSite = (document.getElementById("present-sites").innerText =
        40 - count);
      const totalPrice = (document.getElementById("total-price").innerText =
        550 * count);
      const grandTotal = document.getElementById("grandTotal");
      grandTotal.innerText = grandTotals("grandTotal", count);

      const allselectSites = document.getElementById("all-selectSites");
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerText = site.innerText;
      const p1 = document.createElement("p");
      p1.innerText = "Economoy";
      const p2 = document.createElement("p");
      p2.innerText = "550";

      li.appendChild(p);
      li.appendChild(p1);
      li.appendChild(p2);
      allselectSites.appendChild(li);

      const cupon_but = document.getElementById("cupon");
      const disablbtn = document.getElementById("getvalue");
      if ((totalPrice) => 550) {
        cupon_but.removeAttribute("disabled");
        disablbtn.removeAttribute("disabled");
      }

      document.getElementById("cupon").addEventListener("click", function () {
        const cuopn = document.getElementById("cupon_code");
        const cuponDiv = document.getElementById("cuponDiv");
        const cuponValue = cuopn.value;
        if (cuponValue === "NEW15") {
          const cup = new15();
          grandTotal.innerText = cup;
          cuponDiv.classList.add("hidden");
        } else if (cuponValue === "Couple 20") {
          const cups = couple();
          grandTotal.innerText = cups;
          cuponDiv.classList.add("hidden");
        }
      });
    }
  });
}
