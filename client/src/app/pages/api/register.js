const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Basic validation (expand as needed)
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.gender) {
        setError("Please fill in all required fields");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setSuccessMessage(data.message); // Registration successful
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                dob: "",
                country: "usa",
                gender: "",
            });
        } else {
            setError(data.error || "Something went wrong. Please try again.");
        }
    } catch (err) {
        setError("Failed to connect to the server. Please try again.");
    }
};
