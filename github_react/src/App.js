import React, { Component } from 'react';
import axios from 'axios';
import Profile from "./Profile";
import Repo from "./Repo";
import logoGit from "./logoGit.png";


class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "bee5cd7d0fb98dd7c822",
        client_secret: "e7e71f7aa39307c37b52b0928b8d6c9d7fd27ed7",
        count: 7,
        sort: "created: asc",
      },
      user: [],
      repos: []
    };
  }


  getUser = (e) => {
    const user = e.target.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;

      axios
      .get( `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`)
      .then(({ data }) => this.setState({ user: data }));

      axios
      .get( `${url}/${user}/repos?repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}` )
      .then(({ data }) => this.setState({ repos: data}));
  };

  renderProfile = () => {
    const { user, repos } = this.state;

    return (
      <div className="row">
        <div className="col-md-4">
          <Profile user={user} />
        </div>
        <div className="col-md-8">
          {repos.map(repo => <Repo key={repo.name} repo={repo} /> )}
        </div>
      </div>
    )
  }

  render() {
    const { user } = this.state;
  return (
    <div className="App">
      

        <div className="container">
          <div className="card card-body bg-dark pb-5">
          <img className="card-img-top mb-5 pt-5" src={logoGit} style={{width: '6rem' , marginLeft: '45%'}}/>
              <input onChange={this.getUser} id="search" type="text" className="form-control" required />
                  <div>
                    <input className="form-control text-center align-middle mt-4 bg-warning" value="Entrar" />
                  </div>
          </div>

          { this.state.user.length !== 0 ? this.renderProfile()  : null }
      </div>
    </div>
  );
}
}

export default App;
