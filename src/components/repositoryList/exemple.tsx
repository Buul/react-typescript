import React, { Component } from 'react';

interface Repository {
  id: number
  name: string
}

interface Props{
repositories: Repository[]
}

interface State {
  newRepository?: string
}


 class RepositoryList extends Component<Props, State> {
  state ={
    newRepository: '',
  }


  render() {
    const { repositories } = this.props;
    const { newRepository } = this.state;
    return (
      <ul>
        {repositories.map(repo => <li>{repo.name}</li>)}
      </ul>
            );
  }
}


export default RepositoryList;
