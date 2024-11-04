const header = `
    <h2>Travel with Leo</h2>
    <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./about.html">About</a></li>
        <li>
          <a class="journey" href="">My Journey <i class="arrow down"></i></a>
          <ul class="journey-destination">
            <li><a href="./japan.html">Japan</a></li>
            <li><a href="./hungary.html">Hungary</a></li>
            <li><a href="./austria.html">Austria</a></li>
            <li><a href="./germany.html">Germany</a></li>
          </ul>
        </li>
        <li><a href="./contact.html">Contact</a></li>
    </ul>
`

const footer = `
    <a
        href="https://www.facebook.com/"
        class="fa fa-facebook"
        target="_blank"
      ></a>
      <a
        href="https://x.com/?lang=en"
        class="fa fa-twitter"
        target="_blank"
      ></a>
      <a
        href="https://www.instagram.com/?hl=en"
        class="fa fa-instagram"
        target="_blank"
      ></a>

      <p>&copy; Travel with Leo 2024. All rights reserved.</p>
`

document.querySelector('header').innerHTML = header;
document.querySelector('footer').innerHTML = footer;