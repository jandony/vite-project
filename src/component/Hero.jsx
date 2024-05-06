   
const Hero = (props) => {
   
    return (
        <div style={{ backgroundColor: '#eee', padding: 25 }}>
            <div>
                <p>Name: {props.person.name}</p>
                <p>Age: {props.person.age}</p>
                <p>Gender: {props.person.gender}</p>
            </div>
            <button onClick={props.item}>Click Me!</button>
        </div>
    );
};

export default Hero;