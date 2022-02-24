const React = require('react')
const Default = require('../layout/Default')

class Index extends React.Component{
    render(){
        const fruits = this.props.fruits
        return(
            <Default title='Index Page'>
                <div>
                    <ul>
                    {
                        fruits.map((fruit) => {
                            return (
                                <li key={`${fruit._id}`}>
                                    <a href={`/fruits/${fruit._id}`}>{fruit.name}</a>
                                    <form action={`/fruits/${fruit._id}/edit`} method='GET'>
                                        <input type='submit' value={`Edit ${fruit.name}`} />
                                    </form>
                                    <form action={`/fruits/${fruit._id}?_method=DELETE`} method='POST'>
                                        <input type='submit' value={`Delete ${fruit.name}`} />
                                    </form>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <nav>
                        <a href='/fruits/new'>Go to the New Page</a>
                    </nav>
                </div>
            </Default>
        )
    }
}

module.exports = Index