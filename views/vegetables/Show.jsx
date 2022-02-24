const React = require('react');

class Show extends React.Component {
    render(){
        const vegetable = this.props.vegetable;
        return(
            <div>
                <h1>This is the Show page for {vegetable.name.toUpperCase()}</h1>
                <a href="/vegetables">Go back to the Index</a>
                <p>This vegetable is {vegetable.color}</p>
                <p>{vegetable.readyToEat? 'It is ready to eat' : 'It is not ready to eat'}</p>
                <form action={`/vegetables/${vegetable._id}/edit`} method='GET'>
                    <input type='submit' value={`Edit ${vegetable.name}`} />
                </form>
            </div>
        )
    }
}

module.exports = Show