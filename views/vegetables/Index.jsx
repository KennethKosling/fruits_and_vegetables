const React = require('react')
const Default = require('../layout/Default')

class Index extends React.Component{
    render(){
        const vegetables = this.props.vegetables
        return(
            <Default title='Index Page'>
                <div>
                    <ul>
                    {
                        vegetables.map((vegetable) => {
                            return (
                                <li key={`${vegetable._id}`}>
                                    <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a>
                                    <form action={`/vegetables/${vegetable._id}/edit`} method='GET'>
                                        <input type='submit' value={`Edit ${vegetable.name}`} />
                                    </form>
                                    <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method='POST'>
                                        <input type='submit' value={`Delete ${vegetable.name}`} />
                                    </form>
                                </li>
                            )
                        })
                    }
                    </ul>
                    <nav>
                        <a href='/vegetables/new'>Go to the New Page</a>
                    </nav>
                </div>
            </Default>
        )
    }
}

module.exports = Index