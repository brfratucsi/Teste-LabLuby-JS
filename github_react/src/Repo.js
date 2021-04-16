import React from 'react';
import lockImg from './img/lock.svg';

const Repo = ({ repo }) => (
    <div className="container mt-3">
        <div className="card bg-dark card-body-mb-2">
            <div className="row">
                <div className="col-md-6">
                    <a className="text-white m-3" href="${repo.html_url}" 
                    target="_black" style={{textDecoration:0}}>{repo.name}</a>

                </div>
            </div>                
        </div>    
    </div>    
)

export default Repo;