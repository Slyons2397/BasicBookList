const addBook = document.getElementById('addBook');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
let newBook = document.querySelector('#adjectives2');
let titleadj = document.querySelector('#titleadj');
let authoradj = document.querySelector('#authoradj');
let pagesadj = document.querySelector('#pagesadj');
const pageHeader = document.getElementById('pageHeader');
let deleteButton = document.querySelector('#delete');

addBook.addEventListener('click', (e)=>{
    e.preventDefault();
    newTitle = title.value;
    newAuthor = author.value;
    newPages = pages.value;
    if (newTitle === '' || newAuthor === '' || newPages === ''){
        alert ("Please fill in all forms");
    }else {
    title.value = '';
    author.value = '';
    pages.value = '';
    newestTitle = document.createElement('newestTitle');
    newestTitle.append(newTitle);
    titleadj.append(newestTitle);
    newestAuthor = document.createElement('newestAuthor');
    newestAuthor.append(newAuthor);
    authoradj.append(newestAuthor);
    newestPages = document.createElement('newestPages');
    newestPages.append(newPages);
    pagesadj.append(newestPages);
   
}})


/*deleteButton.addEventListener('click',()=>{
    newestAuthor.remove();
    newestTitle.remove();
    newestPages.remove();

})

*/

