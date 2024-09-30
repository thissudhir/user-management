import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TextField, Button, Box } from "@mui/material";

const UserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    location: "",
    department: "",
  });
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userToEdit = users.find((u) => u.id === id);
      if (userToEdit) {
        setUser(userToEdit);
      }
    }
  }, [id]);

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.firstName = user.firstName ? "" : "First name is required";
    tempErrors.lastName = user.lastName ? "" : "Last name is required";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)
      ? ""
      : "Email is not valid";
    tempErrors.phone = /^\d{10}$/.test(user.phone)
      ? ""
      : "Phone number must be 10 digits";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      if (id) {
        users = users.map((u) => (u.id === id ? { ...user, id } : u));
      } else {
        if (users.some((u) => u.email === user.email)) {
          setErrors({ ...errors, email: "Email already exists" });
          return;
        }
        users.push({ ...user, id: Date.now().toString() });
      }
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            label="Role"
            name="role"
            value={user.role}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Department"
            name="department"
            value={user.department}
            onChange={handleChange}
          />
        </Box>
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={user.location}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "green",
            "&:hover": {
              bgcolor: "darkgreen",
            },
            alignSelf: "flex-start",
          }}
        >
          {id ? "Update User" : "Add User"}
        </Button>
      </Box>
    </form>
  );
};

export default UserForm;
