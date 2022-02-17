const React = require('react')

class Index extends React.Component{
    render(){
        const vegetables = this.props.vegetables
        return(
            <div>
                <h1>This is the Index Page for My Ok Vegetables</h1>
                <ul>
                {
                    vegetables.map((vegetable, i) => {
                        return (
                            <li><a href={`/vegetables/${i}`}>{vegetable.name}</a></li>
                        )
                    })
                }
                </ul>
                <nav>
                    <a href='/vegetables/new'>Go to the New Page</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index