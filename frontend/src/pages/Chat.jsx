import { useState } from "react";
import api from "../services/api";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  CircularProgress,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";

function Chat() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      const res = await api.post("/chat/", {
        message,
      });

      setAnswer(res.data.answer);
      setFaculty(res.data.faculty);
    } catch (err) {
      console.log(err);
      alert("AI Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxWidth="1000px" mx="auto">

      {/* Header */}

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          background:
            "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)",
          color: "white",
          mb: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          IntelliCampus AI Assistant 🤖
        </Typography>

        <Typography mt={1}>
          Ask academic questions, upload PDFs, get faculty recommendations,
          or receive AI-powered guidance.
        </Typography>
      </Paper>

      {/* User Message */}

      <Paper
        sx={{
          p: 3,
          borderRadius: 4,
          mb: 4,
        }}
      >
        <Box display="flex" gap={2} alignItems="center">

          <Avatar sx={{ bgcolor: "#2563eb" }}>
            <PersonIcon />
          </Avatar>

          <Typography fontWeight="bold">
            Ask your question
          </Typography>

        </Box>

        <TextField
          multiline
          rows={5}
          fullWidth
          sx={{ mt: 3 }}
          placeholder="Example: Explain DBMS Normalization..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            mt: 3,
            borderRadius: 3,
          }}
          onClick={askAI}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </Button>

        {loading && (
          <Box mt={3}>
            <CircularProgress />
          </Box>
        )}
      </Paper>

      {/* AI Answer */}

      {answer && (

        <Paper
          sx={{
            p: 4,
            borderRadius: 4,
            mb: 4,
          }}
        >

          <Box display="flex" gap={2}>

            <Avatar sx={{ bgcolor: "#7c3aed" }}>
              <SmartToyIcon />
            </Avatar>

            <Box>

              <Typography
                fontWeight="bold"
                mb={2}
              >
                IntelliCampus AI
              </Typography>

              <Typography
                sx={{
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.8,
                }}
              >
                {answer}
              </Typography>

            </Box>

          </Box>

        </Paper>

      )}

      {/* Faculty Recommendation */}

      {faculty && (

        <Card
          sx={{
            borderRadius: 4,
          }}
        >

          <CardContent>

            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
            >
              Recommended Faculty
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Box display="flex" gap={3}>

              <Avatar
                sx={{
                  bgcolor: "#16a34a",
                  width: 65,
                  height: 65,
                }}
              >
                <SchoolIcon />
              </Avatar>

              <Box>

                <Typography fontWeight="bold">
                  {faculty.name}
                </Typography>

                <Typography color="text.secondary">
                  {faculty.department}
                </Typography>

                <Typography mt={2}>
                  <b>Subjects:</b>{" "}
                  {faculty.subjects.join(", ")}
                </Typography>

              </Box>

            </Box>

          </CardContent>

        </Card>

      )}

    </Box>
  );
}

export default Chat;