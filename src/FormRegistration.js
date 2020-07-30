import React, { useState } from 'react'

const Example = () => {
    const [name, setName] = useState([])
    const [fullName, setFullname] = useState()

    const [email, setEmail] = useState()
    const [updateEmail, setUpdateEmail] = useState()

    const [state, setState] = useState()
    const [updateState, setUpdateStatel] = useState()

    const UpdateData = (event) => {
        setName(event.target.value);
    }
    const UpdateEmail = (event) => {
        setEmail(event.target.value);
    }
    const UpdateState = (event) => {
        setState(event.target.value);
    }
    const OnSub = (event) => {
        event.preventDefault();
        setFullname(name);
        setUpdateEmail(email);
        setUpdateStatel(state);
    }

    return (
        <>

            <div className="row">
                <div className="col-sm-6">
                    <div className="jumbotron">
                        <form onSubmit={OnSub} >
                            <h1>Form Registration  </h1>
                            <label>Name</label> <br />
                            <input type="text" name="fname" value={fullName} onChange={UpdateData} />
                            <br />
                            <label>Email</label> <br />
                            <input type="text" name="Email" value={updateEmail} onChange={UpdateEmail} />
                            <br />
                            <label>State</label> <br />
                            <input type="text" name="state" value={updateState} onChange={UpdateState} />
                          
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>
                <div className="col-sm-6">
                    <div className="div2">
                    <div className="jumbotron Home">
                    <p>Name : {fullName} </p>
                    <p>Email : {updateEmail}</p>
                    <p>State : {updateState}</p>
               
                </div>
</div>
</div>
            </div>

        </>
    )
}

export default Example;