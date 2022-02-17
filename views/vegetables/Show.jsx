const React = require('react');
const fruits = require('../../models/fruits');

class Show extends React.Component {
    render(){
        const vegetable = this.props.vegetable;
        return(
            <div>
                <h1>This is the Show page for {vegetable.name.toUpperCase()}</h1>
                <a href="/vegetables">Go back to the Index</a>
                <p>This vegetable is {vegetable.color}</p>
                <p>{vegetable.readyToEat? 'It is ready to eat' : 'It is not ready to eat'}</p>
            </div>
        )
    }
}

module.exports = Show