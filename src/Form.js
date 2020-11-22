import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    handleSubmit = (event) => {
        this.props.add(this.state.title, this.state.description);
        this.setState({
            tile: '',
            description: ''
        })
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" type="text" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}

