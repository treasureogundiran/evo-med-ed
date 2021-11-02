navLinks = [
  {
    title: "Ecology",
    href: "#",
    description:
      "Trichromatic monkeys seem to have a superior ability when foraging by color discrimination, but dichromatic monkeys may be superior when foraging using shape discrimination.",
  },
  {
    title: "Cell Biology",
    href: "#",
    description:
      "Cone cells send a signal to the brain when retinal molecules bound to opsin proteins are stimulated by photons of particular wavelengths.",
  },
  {
    title: "Molecular Genetics",
    href: "#",
    description:
      "The genes encoding opsin proteins are very closely related. Research indicates that an ancestral opsin gene duplicated in old world monkeys, and subsequent mutations in the new copy resulted in two types of opsin, instead of just one.",
  },
  {
    title: "Phylogenetics",
    href: "#",
    description:
      "Why do all the trichromatic monkeys live in the Old World, while all the dichromatic monkeys live in the New World? An analysis of the genetic relatedness among monkey species can give us clues about when and where color vision evolution occurred.",
  },
];

imageLinks = {
  powerpoint: "../../Images/powerpoint_icon.png",
  sims: "../../Images/game_icon.png",
  question: "../../Images/question_icon.png",
};

resources = [
  {
    title: "PowerPoint Slides",
    img: "powerpoint",
    href: "#",
  },
  {
    title: "Games and Sims",
    img: "sims",
    href: "#",
  },
  {
    title: "Question Guide",
    img: "question",
    href: "#",
  },
];

caseNavList = document.querySelector(".case-nav-links");
resourcesList = document.querySelector(".case-resources");
caseLinksGrid = document.querySelector(".case-links");

window.addEventListener("load", (e) => {
  navLinks.forEach((element) => {
    // Header Navigation Bar
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = element.href;
    a.innerText = element.title;

    li.appendChild(a);

    caseNavList.appendChild(li);

    // Navigation Links Description Panel
    div = document.createElement("div");
    a2 = document.createElement("a");
    a2.innerText = element.title;
    a2.href = element.href;
    p = document.createElement("p");
    p.innerText = element.description;

    div.appendChild(a2);
    div.appendChild(p);
    caseLinksGrid.appendChild(div);
  });

  resources.forEach((element) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = element.href;

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = imageLinks[element.img];
    div.appendChild(img);
    div.classList.add("resource-image-div");
    a.appendChild(div);

    let div2 = document.createElement("div");
    div2.innerText = element.title;
    a.appendChild(div2);

    li.appendChild(a);

    console.log(li);

    resourcesList.appendChild(li);
  });
});
