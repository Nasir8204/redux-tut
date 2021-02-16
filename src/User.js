import React from 'react';

const User = (props) => {
 
    return (
        <div>
           <h1>this is user component</h1> 
           <h3>{props.data.name}</h3>
           <h3>{props.data.age}</h3>
        </div>
    )
}
export default User;