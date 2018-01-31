class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.onVisibilityToggle = this.onVisibilityToggle.bind(this);
        this.state = {
            visible: false
        };
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onVisibilityToggle}>{this.state.visible ? "Hide details" : "Show details"}</button>
                {this.state.visible && <p>Hey. These are some details you can now see!</p>}
            </div>
        );
    }
    onVisibilityToggle() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));