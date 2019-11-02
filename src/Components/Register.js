import React from 'react';
import {NavLink} from 'react-router-dom';

import register_background from '../Assets/img/register-background.jpg';

class Register extends React.Component
{
    user = {
        username: '',
        password: '',
        email: '',
        yob: 0,
        gender: true,
        address: '',
    }

    constructor()
    {
        super();

        this.handleSubmit = this.handleSubmit.bind(this); // handle submit
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e)
    {
        this.user[e.target.name] = e.target.value;   
    }

    handleSubmit(e)
    {
        e.preventDefault();
        console.log('register: ');
        console.log(this.user);
    }

    render()
    {
        return(
            <div style={{paddingTop: '100px'}} className="container">   
                <div className="row">
                    <div className="col-7">
                        <img className="image-background mt-5" src={register_background} alt="Tic Tac Toe Background"></img>
                    </div>
                    <div className="col">                        
                        <div className="cart my-login-cart mx-auto">
                            <div className="card-header login-header text-center bg-danger border-light">REGISTER</div>
                            <div className="card-body bg-365e46">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group row">
                                        <label htmlFor="username" className="text-white font-weight-bold pr-0 col-3 col-form-label">
                                            Username
                                        </label>
                                        <div className="col-9">
                                            <input 
                                                name="username"
                                                type="text" 
                                                className="form-control" 
                                                id="username" 
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="text-white font-weight-bold pr-0 col-3 col-form-label" htmlFor="password">
                                            Password
                                        </label>
                                        <div className="col-9">
                                            <input 
                                                name="password"
                                                type="password" 
                                                className="form-control" 
                                                id="password"                                     
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row align-items-center">
                                        <label htmlFor="confirm" className="text-white font-weight-bold pr-0 col-3 col-form-label">
                                            Comfirm Password
                                        </label>
                                        <div className="col-9">
                                            <input 
                                                name="confirm"
                                                type="password" 
                                                className="form-control" 
                                                id="confirm" 
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="text-white font-weight-bold pr-0 col-3 col-form-label">
                                            Email
                                        </label>
                                        <div className="col-9">
                                            <input 
                                                name="email"
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="yob" className="text-white font-weight-bold pr-0 col-5 col-form-label">
                                            Year of Birth
                                        </label>
                                        <div className="col-7">
                                            <input 
                                                name="yob"
                                                type="number" 
                                                className="form-control" 
                                                min="1930"
                                                id="yob" 
                                                onChange={this.handleChange}
                                            />
                                        </div>                                        
                                    </div>

                                    <div className="form-group row">
                                        <label className="text-white font-weight-bold pr-0 col-3 col-form-label" htmlFor="gender">
                                            Gender   
                                        </label>
                                        <div className="col-9">
                                            <select className="custom-select" name="gender" id="gender" onChange={this.handleChange}>                                                
                                                <option value={true} defaultValue>Male</option>
                                                <option value={false}>Female</option>                                        
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="text-white font-weight-bold pr-0 col-3 col-form-label" htmlFor="address">
                                            Address
                                        </label>
                                        <div className="col-9">
                                            <textarea 
                                                name="address"                                        
                                                className="form-control" 
                                                id="address" 
                                                onChange={this.handleChange}                                                                            
                                            />
                                        </div>
                                    </div>   

                                    <div className="form-group d-flex justify-content-between mx-1">
                                        <button style={{width:'49%'}} className="btn btn-danger text-white font-weight-bold" type="submit">
                                            Register
                                        </button>                                        
                                        <button style={{width:'49%'}} className="btn btn-light font-weight-bold">
                                            Cancel
                                        </button>                                            
                                    </div>   

                                </form>       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;