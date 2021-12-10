// javascript of modal_popup


const modalwrapper = document.querySelector(".modal-wrapper");
const closeBtn = document.querySelector(".close");

function openModal() {
  modalwrapper.classList.add("active");
}
function closeModal() {
  modalwrapper.classList.remove("active");
}

closeBtn.addEventListener("click", function () {
  closeModal();
});
modalwrapper.addEventListener("click", function (e) {
  if (e.target !== this) return;
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

//load all project from data

const port_work = document.querySelector(".port_work");

for (let i = 0; i < port_data.length; i++) {
  port_work.innerHTML += `
    <div class="work">
                    <img class="work_img" src="img/${port_data[i].p_img}" alt="">
                    <h3 class="work_title"> ${port_data[i].p_name}</h3>
                    <button class="work_btn" onclick="pro_show(${i})">Read More</button>
                </div>
    `;
}

console.log(port_data);
console.log(port_data[0].p_cre);

//feed project data on modal

let pro_img = document.querySelector(".pro_img");
let pro_title = document.querySelector(".pro_title");
let pro_desc = document.querySelector(".pro_desc");
let pro_cre = document.querySelector(".pro_cre");
let pro_tech = document.querySelector(".pro_tech");
let pro_a = document.querySelectorAll(".pro_see a");

const pro_show = (ind) => {
  pro_img.src = `img/${port_data[ind].p_img}`;
  pro_title.innerHTML = `${port_data[ind].p_name}`;
  pro_desc.innerHTML = `${port_data[ind].p_desc}`;
  pro_cre.innerHTML = `${port_data[ind].p_cre}`;
  pro_tech.innerHTML = `${port_data[ind].p_tech}`;
  pro_a[0].href = `${port_data[ind].p_view_1}`;
  pro_a[1].href = `${port_data[ind].p_view_2}`;

  openModal();
};

// pro_show(1);
