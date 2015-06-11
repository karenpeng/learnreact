var app = app || {}

(function(){

  'use strict'

  var ESCAPE_KEY = 27
  var ENTER_KEY = 13

  app.TodoItem = React.createClass({

    handleSubmit: function(e){
      var val = this.state.editText.trim()
      if(val){
        //what state does it have????????????????
        this.props.onSave(val)
        this.setState({
          editText: val
        })
      }else{
        this.props.onDestroy()
      }
    },

    handleEdit: function(){
      this.props.onEdit()
      this.setState({
        editText: this.props.todo.title
      })
    },

    handleKeyDown: function(e){
      if(e.which === ENTER_KEY){
        this.setState({
          editText: this.props.todo.title
        }),
        this.this.props.onCancel(e)
      }
    }

    //omg this is too much for me to digest
    render: function(){
      return(
        <li className={React.addons.classSet({
          completed: this.props.todo.completed,
          editing: this.props.editing
        })}>
          <div className='view'>
          //it's a checkbox that toggle
            <input 
              className='toggle'
              type='checkbox'
              checked={this.props.todo.completed}
              onChange={this.props.onToggle}/>
            <lable onDoubleClick={this.handleEdit}>
            {this.props.todo.title}
            </label>
            <button className='destory' onClick={this.props.onDestroy}/>
          </div>
          //what is this input??? can't find it in the page
          <input  
              ref='editField'
              className='edit'
              value={this.state.editText}
              onBlur={this.handleSubmit}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}/>
        </li>
      )
    }
  })
})()