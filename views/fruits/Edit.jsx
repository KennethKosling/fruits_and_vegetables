const React = require('react');
//using app layout
const DefaultLayout = require('./layout/Default')

class Edit extends React.Component {
    render(){
        return(
        <DefaultLayout title='Edit Page'>
          {/*Layout takes in a prop called Title and we set it equal to Edit Page NOTE: comments can't go last or first in jsx return */}    
              {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action={`/fruits/${this.props.fruit._id}?_method=PUT`} method='POST'>
                Name: <input name="name" type="text" defaultValue={this.props.fruit.name} /><br/>
                Enter Color: <input name="color" type="text" defaultValue={this.props.fruit.color}/><br/>
                Is Ready To Eat: 
                    { this.props.fruit.readyToEat? 
                        <input name="readyToEat" type="checkbox" defaultChecked />: 
                        <input name='readyToEat' type='checkbox' /> }
                <br/>
                <input type="submit" value="Submit Changes" />
            </form>
        </DefaultLayout>
        
        )
    }
}

module.exports = Edit;