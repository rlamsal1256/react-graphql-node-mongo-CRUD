import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { loader } from 'graphql.macro';

const CreatePersonMutation = loader('../mutations/CreatePerson.graphql');

class CreatePerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  handleCreate = createPerson => {
    const { name } = this.state;
    const { history } = this.props;

    createPerson({
      variables: {
        input: {
          name
        }
      }
    }).then(() => history.push('/persons'))
  };

  render() {
    return (
      <div>
        Let's create a person
        <div>
          <input onChange={e => this.setState({ name: e.target.value })}/>
        </div>
        <Mutation
          mutation={CreatePersonMutation}
        >
          {createPerson => (
            <button onClick={() => this.handleCreate(createPerson)}>Create</button>
          )}
        </Mutation>
      </div>
    )
  }
}

export default CreatePerson;