const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Task 1: Create selectors to point your data into elements
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let codeSnippetImg = document.getElementById("cta-img");
codeSnippetImg.setAttribute('src', siteContent["cta"]["img-src"]);

let midImage = document.getElementById("middle-img");
midImage.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

//Task 2: Update the HTML with the JSON data

//Nav section
let navLinks = document.querySelectorAll("nav a");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

//cta-text Section
let ctaText = document.querySelector(".cta-text");
//console.log(ctaText);

let ctaTextH1 = document.querySelector(".cta-text h1");
ctaTextH1.innerHTML = 'DOM<br>is<br>awesome';

let ctaTextBtn = document.querySelector(".cta-text button");
ctaTextBtn.textContent =siteContent["cta"]["button"];


//Top Content Text Content Section
let topTextContent= document.querySelectorAll(".top-content .text-content");

//console.log(topTextContent);
topTextContent[0].children[0].textContent = siteContent['main-content']["features-h4"];
topTextContent[0].children[1].textContent = siteContent['main-content']["features-content"];


topTextContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topTextContent[1].children[1].textContent = siteContent["main-content"]["about-content"];

//Bottom Content Text Content Section
let bottomTextContent = document.querySelectorAll(".bottom-content .text-content");


bottomTextContent[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomTextContent[0].children[1].textContent = siteContent["main-content"]["services-content"];

bottomTextContent[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomTextContent[1].children[1].textContent = siteContent["main-content"]["product-content"];

bottomTextContent[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomTextContent[2].children[1].textContent = siteContent["main-content"]["vision-content"];


//Contact Section
let contactSection = document.querySelector('.contact').children;

contactSection[0].textContent = siteContent["contact"]["contact-h4"];
contactSection[1].textContent = siteContent["contact"]["address"];
contactSection[2].textContent = siteContent["contact"]["phone"];
contactSection[3].textContent = siteContent["contact"]["email"];


//Footer
let footerParagraph = document.querySelector("footer p");
footerParagraph.textContent = siteContent["footer"]["copyright"];

//Stretch Goal:


//Task 3: Add New Content
let navSection = document.querySelector('nav');


//Task 3: Here is where I add two new items to the nav section.
let newNavOption1 = document.createElement("a");
newNavOption1.textContent = "Contact Us"

let newNavOption2 = document.createElement("a");
newNavOption2.textContent = "Bribes"

//Example of appendChild
navSection.appendChild(newNavOption1);

//example of prependChild (should be first in that top row)
navSection.prepend(newNavOption2);

//Needed to run this loop here to make sure all nav text turned green. 
for (let i=0; i < navSection.children.length; i++){
  navSection.children[i].style.color = "green";
}

