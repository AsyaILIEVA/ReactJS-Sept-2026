console.log("Hello, React!");

// Create DOM Element
const h1DomElement = document.createElement('h1');
h1DomElement.textContent = 'Hello from DOM element';

// Render DOM Element
document.body.appendChild(h1DomElement);
console.dir(h1DomElement);

// Create React Element
const h1ReactElement = React.createElement('h1', null, 'Hello from React Element!');

// Select DOM Element for React root container
const rootElement = document.getElementById('root');
const rootReactElement = ReactDOM.createRoot(rootDomElement);

// Create secondary header react element
const h2ReactElement = React.createElement('header', null, 'The best UI library ever!');

// Create header element
const headerReactElement = React.createElement('header', null, h1ReactElement, h2ReactElement);


// Render elements inside the root
rootReactElement.render(headerReactElement);

console.dir(h1ReactElement);
