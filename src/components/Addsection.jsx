import { useState } from "react";

function Addsection() {
    const [formData, setFormData] = useState(
        {
            title: "",
            description: "",
            date: ""
        }
    )
    const [tasks, setTasks] = useState([]);

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setTasks([
            ...tasks,
            {title: formData.title, description: formData.description, date: formData.description}
        ])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} value={formData.title} />
            <input type="text" name="description" placeholder="Description" onChange={handleChange} value={formData.description} />
            <input type="date" name="date" onChange={handleChange} value={formData.date} />
            <button>Add</button>
        </form>
    )
}

export default Addsection;