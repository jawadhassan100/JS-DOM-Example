const headingElement1 = document.querySelector('h1');
const idDiv = document.getElementById('divId');
const pElement = document.querySelectorAll('p');


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

