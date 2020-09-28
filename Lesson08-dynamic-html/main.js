// Assignment 8
// blog page h3 headling
let blogPageHeadline = document.createElement('h3'); //create a new headline for the blog page as an h3
blogPageHeadline.textContent = 'All about our dog blog'; //add text to blogPageHeadline
blogPageHeadline.setAttribute('class', 'blog-headline') //add a style by class name
document.body.appendChild(blogPageHeadline); //put blogPageHeadline into the body

// create section w/ class 'intro'
let intro = document.createElement('section');
intro.textContent = 'section test'; //test line
intro.setAttribute('class', 'intro')
intro.setAttribute('id', 'blog-page')
document.body.appendChild(intro);

//create article w/ class 'post' nested inside section 'intro'
let post = document.createElement('article');
post.textContent = 'article test'; //test line
post.setAttribute('class', 'post')
document.body.appendChild(post); //how to nest all this inside section?

//create image w/ src images/blog-1.jpg
let img01 = document.createElement('img');
img01.setAttribute('src', 'images/blog-1.jpg')
img01.setAttribute('alt', 'woman sitting with her arm around her black shepard enjoying the grand canyon')
img01.setAttribute('width', 275)
img01.setAttribute('height', 260)
document.body.appendChild(img01);

//create div
let blogCopyContainer = document.createElement('div');
blogCopyContainer.textContent = 'blogCopyContainer test'; //test line
document.body.appendChild(blogCopyContainer);

//create blog entry title
let entryTitle = document.createElement('h4');
entryTitle.textContent = 'Traveling With Your Dog';
document.body.appendChild(entryTitle);

//create blog entry copy
let entryCopy = document.createElement('p');
entryCopy.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui of cae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';
document.body.appendChild(entryCopy);

blogCopyContainer.appendChild(entryTitle); //append blog post title to blog container
blogCopyContainer.appendChild(entryCopy); //append blog post paragraphy copy to blog container

// My blog object (blog title and entry)
// Make an object for each blog post <------------
const blogObject = {
  title: entryTitle,
  copy: entryCopy,
  'entry counter': 0
};

// My array of blog objects
const objArray = [blogObject, 'test', 2];
