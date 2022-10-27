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

    return (
        <form onSubmit={handleSubmit} className="topbar__form">
            <div className="form__group field">
                <input
                    id="title"
                    className="form__field"
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={formData.title}
                    required
                />
                <label htmlFor="title" className="form__label">
                    Title
                </label>
            </div>
            <div className="form__group field">
                <input
                    id="description"
                    className="form__field"
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    value={formData.description}
                />
                <label htmlFor="description" className="form__label">
                    Description
                </label>
            </div>

            <button className="form__button">+</button>
        </form>
    );
}

export default Addsection;
