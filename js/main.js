// Runs on every page. It uses the components form the components.js
// Now we ask what page are we on?
const page = document.body.dataset.page;
// Now that we have our what page .. now we can add our metadata

// what the mess below means is that we are checking the page we are on through the const page and then we are hardcoding the cases (in this case we have 3) and adding the metadata to it. the same goes for the cta
const pageMeta = {
  home: {
    title: "Home",
    description: "This is a home description"
  },
  about: {
    title: "About",
    description: "This is a about description"
  },
  contact: {
    title: "Contact",
    description: "This is a contact description"
  }
};
// the CTA content
const ctaContent = {
  home: {
    heading: "ljdjsalfjlsa",
    text: "jflasjflasjlfsa",
    buttonText: "sdjalfajslfjsal",
    link: "index.html"
  },
  about: {
    heading: "31416464",
    text: "12515454",
    buttonText: "5f54ef4s5f",
    link: "about.html"
  },
  contact: {
    heading: "djdjdjdjdjd78788",
    text: "djdjdjdjdjd78788",
    buttonText: "djdjdjdjdjd78788",
    link: "contact.html"
  }
}
const favourites = [
  {title: "Espresso", text: "blah"},
  {title: "Cold Brew", text: "blah blah"},
  {title: "Croissant", text: "blah blah blah"}
];

//
// Now build the damn thing
//
// metadata goes in the <head>

// no idea what all this means

const meta = pageMeta[page];
renderHead(createMetadata(meta.title, meta.description, meta.robots));
// now fill in our pages
render("#site-header", createHeader(page));
render("#site-footer", createFooter(siteName));
render("#cta", createCallToAction(ctaContent[page]));
// turn every object in the array into a card
const cardHtml = favourites
 .map((item) => createCard(item.title, item.text))
 .join("");

render("#cards", cardsHtml);