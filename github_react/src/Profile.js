import React from 'react';
import logoExit from "./img/exit.png"

const Profile = ({ user }) => (
    <div>
        <div className="row mt-3">
            <div className="col-md-4 ">
                <div className="card bg-dark text-white" style={{width: '24rem'}}>

                    <h5 className="m-3 col-sm">#{user.login}</h5>

                    <div className="m-5 pb-5">
                        <img className="card-img-top rounded-circle img-fluid 
                        border border-white" src={user.avatar_url} />
                    </div>
                    

                    <div className="m-3">
                        <h2>{user.login}</h2>
                        <p>{user.email}</p>
                        <p>{user.location}</p>
                    </div>

                    <div className="row text-center">
                        <div className="col-sm ">
                            <h1 className="">{user.public_repos}</h1>
                            <div className="">Repositórios</div>   
                        </div>
                        <div className="col-sm ">
                            <h1 className="">{user.followers}</h1>
                            <div className="">Seguidores</div>
                        </div>
                        <div className="col-sm ">
                            <h1 className="">{user.following}</h1>
                            <div className="">Seguindo</div>
                        </div>
                    </div>

                    <div className="m-3">
                        <h3>BIO</h3>
                        <p>{user.bio}</p>
                    </div>

                </div>
            </div>
            <div className="col-md-8">
                <div id="repos"></div>
            </div>
        </div>
    </div>
);

export default Profile;