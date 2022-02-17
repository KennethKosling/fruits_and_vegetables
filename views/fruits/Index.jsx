const React = require('react')

class Index extends React.Component{
    render(){
        const fruits = this.props.fruits
        return(
            <div>
                <h1>This is the Index Page for My Delicious Fruit</h1>
                <ul>
                {
                    fruits.map((fruit, i) => {
                        return (
                            <li><a href={`/fruits/${i}`}>{fruit.name}</a></li>
                        )
                    })
                }
                </ul>
                <nav>
                    <a href='/fruits/new'>Go to the New Page</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index