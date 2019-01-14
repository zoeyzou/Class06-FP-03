import React, { Component } from 'react';
import ModuleForm from './module-form';

// export default (props) => {
//     // Do the fetching, and render the form only when the data is here
//     return (
//         <ModuleForm {...props} isEditing={true} />
//     )
// }

class AddtoClass extends Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        moduleData: null
    }
    componentDidMount() {
        const url = '/api/modules'
        const id = this.props.match.params.moduleid;
        // TODO handle failure (404)
        fetch(`${url}/${id}`)
            .then(
                response => response.json()
            ).then(
                data => this.setState({
                    isLoading: false,
                    moduleData: data
                })
            )
        // .catch(error => this.setState({
        //     message: error
        // })) 
    }
    render() {
        return (
            this.state.isLoading ?
                <div>{this.state.message}</div>
                :
                <ModuleForm {...this.props} moduleData={this.state.moduleData} id={this.props.match.params.moduleid} AddtoClass={true} />
        )
    }
}

export default AddtoClass;