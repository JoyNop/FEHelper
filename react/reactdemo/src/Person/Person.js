import React from 'react';


const person = (props) => {
    return (
        <div>
            <p>hello {props.name},我已经有{props.count}个作品</p>
            <p>{props.children}</p>
        </div>
    )


}

export default person;