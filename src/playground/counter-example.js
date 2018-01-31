class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.removeOne = this.removeOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const count = parseInt(localStorage.getItem("count"), 10);
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            localStorage.setItem("count", this.state.count);
        }
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.removeOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    removeOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));