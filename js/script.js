/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.
***/
const studentList = document.querySelector('.student-list');
const studentItems = document.querySelectorAll('.student-item');
const studentDetails = document.querySelectorAll('.student-details');
const page = document.querySelector('.page');
let startingPage = 1;
let pageItems = 10;
const li = document.createElement('li');
const a = document.createElement('a');

/***
   Create the `showPage` function
***/
const showPage = (list, page) => {
  for (let i = 0; i < list.length; i++) {
    if (i < page * 10 && i >= (page - 1) * 10) {
        list[i].style.display = 'block';
    } else {
        list[i].style.display = 'none';
    }
  }
}

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
  // 1. Determine how many pages are needed for the list by dividing the total number
  //of list items by the max number of items per page

  const pagesNeeded = Math.ceil(list.length / 10);

  // 2. Create a div, give it the pagination class, and append it to the .page div
  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('pagination');
  page.appendChild(paginationDiv);

  // 3. Add a ul to the pagination div for every page
  const ul = document.createElement('ul');
  paginationDiv.appendChild(ul);

  // 4. Add li and anchor(a) tags with the page number text
  for (let i = 1; i <= pagesNeeded; i++) {
    //let li = document.createElement('li'); Moved this into the global scope
    ul.appendChild(li);

    let a = document.createElement('a');
    a.href = '#';
    a.innerText = i;
    li.appendChild(a);
    if (i === 1) {
        a.className = 'active';
    }

  // 5. Add an event listener to each (a) tag. When they are clicked call the showPage
  // function to display the appropriate page
    a.addEventListener('click', (e) => {
      let currentPage = e.target.textContent;
      showPage(studentItems, currentPage);
      const links = document.querySelectorAll('a');

  // 6. Loop over pagination links to remove active class from all links
      const pageLinks = document.querySelectorAll('.pagination ul li a');
      for (let i = 0; i < pageLinks.length; i++) {
        pageLinks[i].classList.remove('active');
      }

  // 7. Add the active class to the link that was just clicked. You can identify that clicked
  // link using event.target
      e.target.className = 'active';
      });
    }
}
showPage(studentItems, startingPage);
appendPageLinks(studentItems);
