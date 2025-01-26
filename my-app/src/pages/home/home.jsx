import React, { useState } from 'react';

function MovieForm() {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form behavior (e.g., page reload)
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div>
            <h1>Movie Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter movie title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        placeholder="Enter movie description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default MovieForm;
