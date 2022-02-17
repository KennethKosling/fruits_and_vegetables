const React = require('react');

class Show extends React.Component {
    render(){
        const fruit = this.props.fruit;
        return (
            <div>
                <h1>This is the Show Page for {fruit.name.toUpperCase()}</h1>
                <a href="/fruits">Go back to the Index</a>
                <p>This fruit is {fruit.color}</p>
                <p>{fruit.readyToEat? 'It is ready to eat' : 'It is not ready to eat...Can\'t touch this'}</p>
            </div>
        );  
    }
}

module.exports = Show;