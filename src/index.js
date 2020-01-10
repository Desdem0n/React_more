import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
const Person = ({img, name, job, children}) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return (
        <article className="person">
            <img src= {url}
             alt="person"
            /> 
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    )
}



const PersonList = () => {
    return (
    <section className="person-list">
        <Person img="13" name="John" job="developer" />
        <Person img="69" name="Harry" job="architect" />
        <Person img="10" name="Mobby" job="designer">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, inventore.
                </p>
                </Person> 
    </section>
    );
    
};

ReactDOM.render(<PersonList></PersonList>,
    document.getElementById('root'));