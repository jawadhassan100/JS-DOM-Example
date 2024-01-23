const headingElement1 = document.querySelector('h1');
const idDiv = document.getElementById('divId');
const pElement = document.querySelectorAll('p');
const newh5 = document.createElement("h2");
newh5.innerText = "H3";
document.body.appendChild(newh5);
const newh2 = document.createElement("h2");
const pEle = document.createElement('p')



headingElement1.innerText = "Heading"
idDiv.innerText = "hello"

newh2.innerText = "H2"
newh2.classList.add("h2Class")
newh2.classList.add("class2")
newh2.classList.remove("class2")
newh2.id = "h2Id"

newh2.style.backgroundColor = "black"
newh2.style.color = "white"

// idDiv.innerHTML = "<script>alert(\"hello\")</script>"

idDiv.append(newh2)


pElement.forEach((element) => {
    element.innerText = "Paragraph"
})

const Headingh1 = document.getElementById("head1");
Headingh1.innerText="Hello Javascript";
const para2= document.querySelector("p");
para2.innerText="this is me jawad"
para2.style.width="150px"
para2.style.backgroundColor="lightblue"
para2.style.color="purple"
para2.style.fontWeight="bold"
para2.style.textTransform="uppercase"
para2.style.padding="10px"

const Paragraph=document.createElement("p");
Paragraph.innerText="new element is not creating";
document.body.append(Paragraph);

const btn= document.createElement("input");
document.body.append(btn)
/*const submit=document.forms("submit");
document.body.append(submit)*/

const table=document.querySelector("table");
const tr =document.createElement("tr");
const name =document.innerText("jawad");
const email=document.innerText("jawad2@gmail.com");
tr.append(name,email);
table.appendChild(tr)