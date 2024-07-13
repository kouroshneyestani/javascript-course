import "./style.css";

const examples = [
    { title: "Example 1: Counter", path: "/src/examples/example1/index.html" },
    // Add more examples here as needed
];

document.querySelector("body").innerHTML = `
  <div id="app">
    <h1>JavaScript Examples</h1>
    <nav>
        <ul id="example-list"></ul>
    </nav>
  </div>
`;

const exampleList = document.querySelector("#example-list");

examples.forEach((example) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.href = example.path;
    link.textContent = example.title;

    listItem.appendChild(link);
    exampleList.appendChild(listItem);
});
