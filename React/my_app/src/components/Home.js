import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { jsPDF } from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(7);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generatePDF = () => {
    const { name, email, phone, education, experience, skills } = formData;

    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      education.length === 0 ||
      experience.length === 0 ||
      skills.length === 0
    ) {
      toast.error("Please Add Your Details...", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    toast.success("Your resume is being generated! Please wait...", {
      position: "top-center",
      autoClose: 2000,
    });

    setLoading(true);

    let countdown = 7;
    const interval = setInterval(() => {
      if (countdown > 0) {
        setTimer(countdown);
        countdown -= 1;
      } else {
        clearInterval(interval);
        setLoading(false);

        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text("Resume", 20, 20);
        doc.setFontSize(12);
        doc.text(`Made by: Ayaz`, 20, 150);
        doc.text(`Name: ${name}`, 20, 30);
        doc.text(`Email: ${email}`, 20, 40);
        doc.text(`Phone: ${phone}`, 20, 50);
        doc.text(`Education: ${education}`, 20, 60);
        doc.text(`Experience: ${experience}`, 20, 70);
        doc.text(`Skills: ${skills}`, 20, 80);

        doc.save(`${name}_Resume.pdf`);
      }
    }, 1000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      education: "",
      experience: "",
      skills: "",
    });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ backgroundColor: "#E0F7FA", minHeight: "100vh", py: 5 }}
    >
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#00796B" }}>
          AI Resume Builder
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ color: "#00796B" }}
        >
          Fill out the form and get your professional resume!
        </Typography>
      </Box>

      <Card
        sx={{ p: 3, boxShadow: 5, backgroundColor: "white", borderRadius: 2 }}
      >
        <CardContent>
          <form>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#E0F7FA",
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  color: "#00796B",
                },
              }}
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#E0F7FA",
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  color: "#00796B",
                },
              }}
              required
            />
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#E0F7FA",
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  color: "#00796B",
                },
              }}
            />
            <TextField
              fullWidth
              label="Education"
              variant="outlined"
              name="education"
              value={formData.education}
              onChange={handleChange}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#E0F7FA",
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  color: "#00796B",
                },
              }}
              multiline
              rows={4}
            />
            <TextField
              fullWidth
              label="Work Experience"
              variant="outlined"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#E0F7FA",
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  color: "#00796B",
                },
              }}
              multiline
              rows={4}
            />
            <TextField
              fullWidth
              label="Skills"
              variant="outlined"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#E0F7FA",
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  color: "#00796B",
                },
              }}
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="success"
              sx={{
                width: "100%",
                mt: 2,
                backgroundColor: "#00796B",
                "&:hover": {
                  backgroundColor: "#004D40",
                },
              }}
              onClick={generatePDF}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "green" }} />
              ) : (
                `Generate Resume (${timer}s)`
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <ToastContainer />
    </Container>
  );
};

export default ResumeBuilder;
