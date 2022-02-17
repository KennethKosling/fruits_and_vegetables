const React = require('react');

class New extends React.Component {
    render(){
        return(
        <div>
            <h1>Hi, This is the New Page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/fruits" method="POST">
                Name: <input name="name" type="text" /><br/>
                Enter Color: <input name="color" type="text" /><br/>
                Is Ready To Eat: <input name="readyToEat" type="checkbox" /><br/>
                <input type="submit" value="Creat A Fruit" />
            </form>
            <nav>
                <a href='/fruits'>Back to the Index</a>
            </nav>
        </div>
        
        )
    }
}

module.exports = New;