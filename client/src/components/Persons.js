import React from 'react';
import { Query, Mutation } from 'react-apollo';
import {loader} from "graphql.macro";

const GetAllPersons = loader('../queries/GetAllPersons.graphql');
const DeletePerson = loader('../mutations/DeletePerson.graphql');

const handleDelete = (deletePerson, _id) => {
  console.log(_id);
  deletePerson({
    variables: {
      input: {
        _id
      }
    }
  })
};

const Log = ({data}) => {
  return (
    <ul>
      {
        data.getAllPersons.map(person => (
          <li key={person._id}>
            {person.name}
            <Mutation
              mutation={DeletePerson}
              refetchQueries={() => [{ query: GetAllPersons }] }
            >
              {(deletePerson) => {
                return (
                  <button onClick={() => handleDelete(deletePerson, person._id)}>X</button>
                )
              }}
            </Mutation>
          </li>
        ))
      }
    </ul>
  );
};

export default () => (
  <Query query={GetAllPersons}>
    {({data, loading, error}) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error</div>;

      return (
        <Log data={data} />
      )
    }}
  </Query>
)