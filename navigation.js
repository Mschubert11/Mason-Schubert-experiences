/* =========================================================
   navigation.js

   Shared navigation for all portfolio pages.
   Include this file on every page.

   Example:

   <nav
       class="primary-navigation"
       data-site-nav>
   </nav>

   <script src="navigation.js"></script>
   ========================================================= */


/* ---------- Navigation items ---------- */

const navigationItems = [
    {
        name: "Home",
        url: "index.html"
    },
    {
        name: "About Me",
        url: "about.html"
    },
    {
        name: "Skills",
        url: "skills.html"
    },
    {
        name: "Work Experience",
        url: "work experience.html"
    },
    {
        name: "Education",
        url: "education.html"
    }
];


/* =========================================================
   CREATE NAVIGATION
   ========================================================= */

function createNavigation() {

    const navigation = document.querySelector("[data-site-nav]");

    if (!navigation) {
        return;
    }


    const list = document.createElement("ul");


    navigationItems.forEach(item => {

        const listItem = document.createElement("li");

        const link = document.createElement("a");

        link.href = item.url;
        link.textContent = item.name;


        /* Highlight the current page */

        if (isCurrentPage(item.url)) {

            link.setAttribute(
                "aria-current",
                "page"
            );

        }


        listItem.appendChild(link);

        list.appendChild(listItem);

    });


    navigation.appendChild(list);
}


/* =========================================================
   DETECT CURRENT PAGE
   ========================================================= */

function isCurrentPage(page) {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    /*
       GitHub Pages sometimes loads the homepage as:
       /index.html

       while the browser may display:
       /
    */

    if (
        (currentPage === "" || currentPage === "index.html") &&
        page === "index.html"
    ) {
        return true;
    }


    return currentPage === page.toLowerCase();
}


/* =========================================================
   INITIALISE NAVIGATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    createNavigation
);
