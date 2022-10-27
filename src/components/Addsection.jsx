import { useEffect, useState } from "react";

function Addsection(props) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.setTasks([
            ...props.tasks,
            {
                title: formData.title,
                description: formData.description,
            },
        ]);
    }

    useEffect(() => {
        setFormData({
            title: "",
            description: "",
            date: "",
        });
    }, [props.tasks]);

    console.log(props.tasks);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={formData.title}
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                value={formData.description}
            />
            <button>Add</button>
        </form>
    );
}

export default Addsection;
