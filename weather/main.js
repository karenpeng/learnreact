


var Item = React.createClass({

  deleteClicked: function(){
    this.props.onDelete(this.props.index);
  },

  render: function (){
    return (
      <div key={this.props.key}>
        <span>{this.props.city}</span>
        <button onClick={this.deleteClicked}>X</button>
      </div>
    )
  }
})



var ItemList = React.createClass({
    render: function(){

      var items = this.props.items.map(function (item, index){
        return(
          <Item key={index} index={index} city={item} onDelete={this.props.onDelete}/>
          )
      }.bind(this));

      return (
        <div>
          {items}
        </div>
      )
    }
})

// var addBar = React.createClass({
//   render:function(){
//     return(
//       <div>
//         <input onChange=/>
//       </div>
//     )
//   }
// })

var App = React.createClass({
  getInitialState: function(){
    return {
      items:[],
      newItem:''
    }
  },
  onChange: function(e){
    this.setState({
      newItem: e.target.value
    })
  },
  addItem: function(){
    console.log(this.state.newItem)
    this.setState({
      items: this.state.items.concat([this.state.newItem]),
      newItem:''
    })
  },
  onDeleteHandler: function(index){
    console.log('deleting: ' + index);
    this.state.items.splice(index, 1)
    this.setState({
      items: this.state.items
    })
  },
  render: function(){
    return(
    <div>
      <input onChange={this.onChange} value={this.state.newItem} />
      <button onClick={this.addItem}>add</button>
      <ItemList items={this.state.items} onDelete={this.onDeleteHandler}/>
    </div>
    )
  }
})

React.render(<App/>,document.body)