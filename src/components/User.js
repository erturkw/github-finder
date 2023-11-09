import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class User extends Component {
    render() {
        const { login, avatar_url, html_url } = this.props.user;
        return (

            <div className="col-md-3">
                <div className="card mt-3 ">
                    <img src={avatar_url} alt="" className='img-fluid' />
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <Link to={`/user/${login}`} className='btn btn-dark btn-sm'>Go Profile</Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default User
