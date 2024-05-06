

const Contact = () => {

    const formData = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    }

    return (
        <div style={{ padding: 25 }}>
            <h2>Test Form</h2>
            <form onSubmit={formData}>
                <input type="text" placeholder="Name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;