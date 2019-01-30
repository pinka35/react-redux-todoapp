import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addTask } from "../../actions/"

class TaskBar extends React.Component {
    render() {
        return (
            <div>
                <input type="text" ref="task" placeholder="Add todos here"></input>
                <button onClick={() => this.props.addTask(this.refs.task.value)}>ADD TASK</button>
            </div>
        )


    }

}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTask }, dispatch)
}


export default connect(() => { }, mapDispatchToProps)(TaskBar)