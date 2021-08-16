import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

class NewUserForm extends Component {

    state = {
        firstName:'',
        lastName:''
    }

    handleSubmit = e => {
        e.preventDefault();

        const { firstName, lastName } = this.state;

        this.props.onSubmit({
            firstName,
            lastName
        });
        this.setState({
            firstName:'',
            lastName:''
        })
    }
    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.currentTarget.value
        });
    }
    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.currentTarget.value
        });
    }
    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label>
                    First Name
                </Label>
                <Input required placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange}></Input>
            </FormGroup>
            <FormGroup>
                <Label>
                    Last Name
                </Label>
                <Input required placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange}></Input>
            </FormGroup>
            <FormGroup>
                <Button block outline type="submit" color="primary">Create</Button>
            </FormGroup>
        </Form>
        )
    }
}

export default NewUserForm
