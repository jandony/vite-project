import Header from "./component/Header";
import Hero from './component/Hero';
import Contact from './component/Contact';
import Footer from './component/Footer';


const App = () => {

    let marks = 90;
    const city = ['USA', 'Dubai', 'Canada', 'China', 'Japan'];
    const status = true;
    const myObject = { name: 'Jeff', age: 29, gender: 'male' }

    const BtnClick = () => {
        alert("Hi there!");
    }

    return (
        <div style={{ width: '75%', margin: '0 auto', paddingTop: '25px' }}>
            {/* example of an Immediately invoked function */}
            {( () => {
                    if ( marks > 80 && marks < 100 ) {
                        return <h1>A</h1>
                    } else if ( marks > 70 && marks < 80 ) {
                        return <h1>B</h1>
                    } else if ( marks > 60 && marks < 70 ) {
                        return <h1>C</h1>
                    } else {
                        return <h1>F</h1>
                    }
                }
            )()}

            {/* example of looping */}
            <ul>
                { city.map( (item, i) => {
                        return <li key={i.toString()}>{item}</li>;
                    } )
                }
            </ul>

            {/* example of conditional rendering using ternary operators */}
            <div style={{ backgroundColor: '#eee', padding: 25 }}>
                <h2>Login Status: {status ? 'logged in' : 'logged out'}</h2>
                {status ? <button>Log Out</button> : <button>Login</button>}
            </div>

            {/* example of rendering & passing props to child components */}
            <Contact />
            <Header title="My Logo" />
            <Hero person={myObject} item={BtnClick}/>
            <Footer />
        </div>
    );
};

export default App;