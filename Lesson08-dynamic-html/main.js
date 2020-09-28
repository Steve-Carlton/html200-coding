// Assignment 8
// blog page h3 headling
let blogPageHeadline = document.createElement('h3'); //create a new headline for the blog page as an h3
blogPageHeadline.textContent = 'All about our dog blog'; //add text to blogPageHeadline
blogPageHeadline.setAttribute('class', 'blog-headline') //add a style by class name
document.body.appendChild(blogPageHeadline); //put blogPageHeadline into the body

// create section w/ class 'intro'
let intro = document.createElement('section');
// intro.textContent = 'section test'; //test line
intro.setAttribute('class', 'intro')
intro.setAttribute('id', 'blog-page')
document.body.appendChild(intro);

//ENTRY 1

//create article w/ class 'post' nested inside section 'intro'
let post1 = document.createElement('article');
// post.textContent = 'article test'; //test line
post1.setAttribute('class', 'post')
document.body.appendChild(post1); //how to nest all this inside section?
intro.appendChild(post1);

//create image w/ src images/blog-1.jpg
let img01 = document.createElement('img');
img01.setAttribute('src', 'images/blog-1.jpg')
img01.setAttribute('alt', 'woman sitting with her arm around her black shepard enjoying the grand canyon')
img01.setAttribute('width', 275)
img01.setAttribute('height', 260)
document.body.appendChild(img01);
post1.appendChild(img01);

//create div (blog text container)
let blogCopyContainer1 = document.createElement('div');
//blogCopyContainer1.textContent = 'blogCopyContainer test'; //test line
document.body.appendChild(blogCopyContainer1);
post1.appendChild(blogCopyContainer1);

//create blog entry title
let entryTitle1 = document.createElement('h4');
entryTitle1.textContent = 'Traveling With Your Dog';
document.body.appendChild(entryTitle1);
blogCopyContainer1.appendChild(entryTitle1); //append blog post title to blog container

//create blog entry copy
let entryCopy1 = document.createElement('p');
entryCopy1.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui of cae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.';
document.body.appendChild(entryCopy1);
blogCopyContainer1.appendChild(entryCopy1); //append blog post paragraphy copy to blog container

//ENTRY 2

//create article w/ class 'post' nested inside section 'intro'
let post2 = document.createElement('article');
// post.textContent = 'article test'; //test line
post2.setAttribute('class', 'post')
document.body.appendChild(post2); //how to nest all this inside section?
intro.appendChild(post2);

//create image w/ src images/blog-2.jpg
let img02 = document.createElement('img');
img02.setAttribute('src', 'images/blog-2.jpg')
img02.setAttribute('alt', 'four well-behaved dogs sit watching their dog walker enjoying the grand canyon')
img02.setAttribute('width', 275)
img02.setAttribute('height', 260)
document.body.appendChild(img02);
post2.appendChild(img02);

//create div (blog text container)
let blogCopyContainer2 = document.createElement('div');
//blogCopyContainer2.textContent = 'blogCopyContainer test'; //test line
document.body.appendChild(blogCopyContainer2);
post2.appendChild(blogCopyContainer2);

//create blog entry title
let entryTitle2 = document.createElement('h4');
entryTitle2.textContent = 'How To Walk Multiple Dogs';
document.body.appendChild(entryTitle2);
blogCopyContainer2.appendChild(entryTitle2); //append blog post title to blog container

//create blog entry copy
let entryCopy2 = document.createElement('p');
entryCopy2.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui of cae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.';
document.body.appendChild(entryCopy2);
blogCopyContainer2.appendChild(entryCopy2); //append blog post paragraphy copy to blog container

//ENTRY 3

//create article w/ class 'post' nested inside section 'intro'
let post3 = document.createElement('article');
// post.textContent = 'article test'; //test line
post3.setAttribute('class', 'post')
document.body.appendChild(post3); //how to nest all this inside section?
intro.appendChild(post3);

//create image w/ src images/blog-3.jpg
let img03 = document.createElement('img');
img03.setAttribute('src', 'images/blog-3.jpg')
img03.setAttribute('alt', 'a dog and its owner play fetch at sunset')
img03.setAttribute('width', 275)
img03.setAttribute('height', 260)
document.body.appendChild(img03);
post3.appendChild(img03);

//create div (blog text container)
let blogCopyContainer3 = document.createElement('div');
//blogCopyContainer3.textContent = 'blogCopyContainer test'; //test line
document.body.appendChild(blogCopyContainer3);
post3.appendChild(blogCopyContainer3);

//create blog entry title
let entryTitle3 = document.createElement('h4');
entryTitle3.textContent = 'Teach Your Dog To Fetch!';
document.body.appendChild(entryTitle3);
blogCopyContainer3.appendChild(entryTitle3); //append blog post title to blog container

//create blog entry copy
let entryCopy3 = document.createElement('p');
entryCopy3.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui of cae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.';
document.body.appendChild(entryCopy3);
blogCopyContainer3.appendChild(entryCopy3); //append blog post paragraphy copy to blog container

// My blog a object per blog title and entry
const blogObject1 = {
  post: post1,
  image: img01,
  copyContainer: blogCopyContainer1,
  title: entryTitle1,
  copy: entryCopy1,
  'entry number': 0
};

const blogObject2 = {
  title: entryTitle2,
  copy: entryCopy2,
  'entry number': 1
};

const blogObject3 = {
  title: entryTitle3,
  copy: entryCopy3,
  'entry number': 2
};

// My array of blog objects
const objArray = [blogObject1, blogObject2, blogObject3];

// Loop (i counter for blog entries)
// loop needs to append each entry to an article (post container), and then to the section (blog container)
// i++ blogObject + number

/*blog post anatomy
create an post container article, append it to intro section
create image, append it to article
create blogCopyContainer div, append it to article
create blog post title h4, append it to blogCopyContainer
create paragraph, append it to blogCopyContainer
*/
