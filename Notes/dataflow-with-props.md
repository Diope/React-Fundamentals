# Dataflow with Props in React

React has a simple system for passing data from one component to another child component and that system is through *props*.
Props are to components what arguments are to functions.

Basic example:
```jsx
class HelloUser extends React.Component {
    render() {
        return (
            <div>
                Hello, {this.props.name}
            </div>
        )
    }
}
ReactDOM.render(
    <HelloUser name="Tim Horton"/>,
    document.getElementById('app')
);
```

When using the component, the name is being passed, this attribute can be accessed inside the component as `this.props.name`