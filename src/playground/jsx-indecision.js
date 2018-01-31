const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onMakeDecision = () => {
    const randomIndex = Math.floor(Math.random() * app.options.length);
    const randomOption = app.options[randomIndex];
    alert(randomOption);
};

const onRemoveAll = () => {
    app.options = [];
    renderApp();
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};

const formatOptions = (options) => {
   return options.map((option) => <li key={option}>{option}</li>);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle && app.subtitle != "") && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {formatOptions(app.options)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    const appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
};

renderApp();