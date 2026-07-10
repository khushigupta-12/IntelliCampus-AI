import { useEffect, useRef, useState } from "react";
import api from "../services/api";

import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import SchoolIcon from "@mui/icons-material/School";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddIcon from "@mui/icons-material/Add";

function Chat() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [faculty, setFaculty] = useState(null);

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const suggestions = [
    "Explain DBMS Normalization",
    "Difference between TCP and UDP",
    "Explain Operating System Scheduling",
    "Recommend Faculty for Machine Learning",
    "Explain React Hooks",
    "What is SQL Injection?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const askAI = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentQuestion = message;

setMessage("");

setFaculty(null);

setLoading(true);

    try {

      const res = await api.post("/chat/", {
        message: currentQuestion,
      });

      const aiMessage = {
        sender: "ai",
        text: res.data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);

      setFaculty(res.data.faculty || null);

    } catch (err) {

  console.error(err);

  setFaculty(null);

  setMessages((prev) => [
    ...prev,
    {
      sender: "ai",
      text: "Something went wrong. Please try again.",
    },
  ]);

} finally {

      setLoading(false);

    }

  };

  const handleKeyDown = (e) => {

    if (e.key === "Enter" && !e.shiftKey) {

      e.preventDefault();

      askAI();

    }

  };

  return (

    <Box
      sx={{
        height: "100vh",
        display: "flex",
        bgcolor: "#0f172a",
      }}
    >

      {/* Sidebar */}

      <Paper
        elevation={0}
        sx={{
          width: 280,
          display: {
            xs: "none",
            md: "flex",
          },
          flexDirection: "column",
          bgcolor: "#111827",
          color: "white",
          borderRadius: 0,
          borderRight: "1px solid rgba(255,255,255,.08)",
        }}
      >

        <Box p={3}>

          <Typography
            variant="h5"
            fontWeight="bold"
          >
            IntelliCampus AI
          </Typography>

          <Typography
            variant="body2"
            mt={1}
            color="gray"
          >
            AI Powered Assistant
          </Typography>

          <Button
  fullWidth
  startIcon={<AddIcon />}
  variant="contained"
  onClick={() => {
    setMessages([]);
    setFaculty(null);
    setMessage("");
  }}
  sx={{
    mt: 4,
    borderRadius: 3,
    py: 1.3,
    textTransform: "none",
  }}
>
  New Chat
</Button>

        </Box>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,.08)",
          }}
        />

        <Box p={3}>

          <Typography
            color="gray"
            fontWeight="bold"
          >
            Recent Chats
          </Typography>

          <Stack spacing={2} mt={3}>

            <Paper
              sx={{
                p: 2,
                bgcolor: "#1f2937",
                color: "white",
                borderRadius: 3,
              }}
            >
         <ChatOutlinedIcon
                sx={{
                  mr: 1,
                  fontSize: 18,
                }}
              />

              Explain DBMS
            </Paper>

            <Paper
              sx={{
                p: 2,
                bgcolor: "#1f2937",
                color: "white",
                borderRadius: 3,
              }}
            >
              <ChatOutlinedIcon
                sx={{
                  mr: 1,
                  fontSize: 18,
                }}
              />

              Faculty Recommendation
            </Paper>

            <Paper
              sx={{
                p: 2,
                bgcolor: "#1f2937",
                color: "white",
                borderRadius: 3,
              }}
            >
             <ChatOutlinedIcon
                sx={{
                  mr: 1,
                  fontSize: 18,
                }}
              />

              Explain React Hooks
            </Paper>

          </Stack>

        </Box>

      </Paper>

      {/* Main Chat Area */}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(to bottom,#0f172a,#111827)",
        }}
      >
                {/* Header */}

        <Box
          sx={{
            px: { xs: 2, md: 4 },
            py: 2,
            borderBottom: "1px solid rgba(255,255,255,.08)",
            bgcolor: "rgba(15,23,42,.65)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="white"
          >
            IntelliCampus AI Assistant
          </Typography>

          <Typography
            variant="body2"
            color="gray"
            mt={0.5}
          >
            Ask questions, get faculty recommendations, and learn with AI.
          </Typography>
        </Box>

        {/* Messages */}

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            px: { xs: 2, md: 6 },
            py: 4,
          }}
        >

          {messages.length === 0 && (

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >

              <Avatar
                sx={{
                  bgcolor: "#2563eb",
                  width: 90,
                  height: 90,
                  mb: 3,
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 45 }} />
              </Avatar>

              <Typography
                variant="h3"
                fontWeight="bold"
                color="white"
                textAlign="center"
              >
                What can I help you with?
              </Typography>

              <Typography
                mt={2}
                textAlign="center"
                color="gray"
                maxWidth={650}
              >
                Ask anything about programming, DBMS, Operating Systems,
                Computer Networks, AI, Machine Learning, or request a faculty
                recommendation.
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                useFlexGap
                flexWrap="wrap"
                justifyContent="center"
                mt={6}
              >

                {suggestions.map((item) => (

                  <Chip
                    key={item}
                    label={item}
                    clickable
                    onClick={() => setMessage(item)}
                    sx={{
                      bgcolor: "#1e293b",
                      color: "white",
                      borderRadius: 3,
                      px: 1,
                      py: 3,
                      fontSize: 14,
                      "&:hover": {
                        bgcolor: "#2563eb",
                      },
                    }}
                  />

                ))}

              </Stack>

            </Box>

          )}

          {messages.map((msg, index) => (

            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent:
                  msg.sender === "user"
                    ? "flex-end"
                    : "flex-start",
                mb: 3,
              }}
            >

              <Paper
                elevation={0}
                sx={{
                  maxWidth: "80%",
                  px: 3,
                  py: 2.5,
                  borderRadius: 4,
                  bgcolor:
                    msg.sender === "user"
                      ? "#2563eb"
                      : "#1e293b",
                  color: "white",
                  display: "flex",
                  gap: 2,
                }}
              >

                <Avatar
                  sx={{
                    bgcolor:
                      msg.sender === "user"
                        ? "#1d4ed8"
                        : "#7c3aed",
                    width: 40,
                    height: 40,
                  }}
                >
                  {msg.sender === "user" ? (
                    <PersonIcon />
                  ) : (
                    <SmartToyIcon />
                  )}
                </Avatar>

                <Box>

                  <Typography
                    fontWeight="bold"
                    mb={1}
                  >
                    {msg.sender === "user"
                      ? "You"
                      : "IntelliCampus AI"}
                  </Typography>

                  <Typography
                    sx={{
                      whiteSpace: "pre-wrap",
                      lineHeight: 1.9,
                    }}
                  >
                    {msg.text}
                  </Typography>

                </Box>

              </Paper>

            </Box>

          ))}

          {loading && (

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              mt={3}
            >

              <Avatar
                sx={{
                  bgcolor: "#7c3aed",
                }}
              >
                <SmartToyIcon />
              </Avatar>

              <Paper
                sx={{
                  px: 3,
                  py: 2,
                  bgcolor: "#1e293b",
                  color: "white",
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >

                <CircularProgress
                  size={20}
                  sx={{
                    color: "white",
                  }}
                />

                <Typography>
                  IntelliCampus AI is thinking...
                </Typography>

              </Paper>

            </Box>

          )}
                    {/* Faculty Recommendation */}

          {faculty && (

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                mt: 3,
                mb: 4,
              }}
            >

              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  maxWidth: 760,
                  borderRadius: 5,
                  background:
                    "linear-gradient(135deg,#ffffff,#f8fafc)",
                  border: "1px solid #e5e7eb",
                  overflow: "hidden",
                }}
              >

                <Box
                  sx={{
                    background:
                      "linear-gradient(90deg,#2563eb,#7c3aed)",
                    color: "white",
                    p: 2.5,
                  }}
                >

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    🎓 Recommended Faculty
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ opacity: .9 }}
                  >
                    AI matched this faculty based on your query.
                  </Typography>

                </Box>

                <CardContent sx={{ p: 4 }}>

                  <Box
                    display="flex"
                    alignItems="center"
                    gap={3}
                  >

                    <Avatar
                      sx={{
                        width: 72,
                        height: 72,
                        bgcolor: "#16a34a",
                      }}
                    >
                      <SchoolIcon fontSize="large" />
                    </Avatar>

                    <Box>

                      <Typography
                        variant="h5"
                        fontWeight="bold"
                      >
                        {faculty.name}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        mt={0.5}
                      >
                        {faculty.department}
                      </Typography>

                    </Box>

                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Typography
                    fontWeight="bold"
                    mb={2}
                  >
                    Expertise
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                  >

                    {faculty.subjects?.map((subject, index) => (

                      <Chip
                        key={index}
                        label={subject}
                        color="primary"
                        variant="outlined"
                        sx={{
                          borderRadius: 3,
                          mb: 1,
                        }}
                      />

                    ))}

                  </Stack>

                  <Paper
                    elevation={0}
                    sx={{
                      mt: 4,
                      p: 3,
                      bgcolor: "#f8fafc",
                      borderRadius: 3,
                    }}
                  >

                    <Typography
                      fontWeight="bold"
                      mb={1}
                    >
                      Why this faculty?
                    </Typography>

                    <Typography
                      color="text.secondary"
                      lineHeight={1.8}
                    >
                      Based on your question, this faculty member
                      teaches the most relevant subjects and is the
                      best recommendation from IntelliCampus AI.
                    </Typography>

                  </Paper>

                </CardContent>

              </Card>

            </Box>

          )}

          {/* Auto Scroll */}

          <div ref={messagesEndRef} />

        </Box>
                {/* Bottom Input */}

        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderTop: "1px solid rgba(255,255,255,.08)",
            bgcolor: "rgba(15,23,42,.95)",
            backdropFilter: "blur(12px)",
          }}
        >

          <Box
            sx={{
              maxWidth: 1000,
              mx: "auto",
              display: "flex",
              gap: 2,
              alignItems: "flex-end",
            }}
          >

            <TextField
              multiline
              maxRows={6}
              fullWidth
              placeholder="Ask anything about DBMS, DSA, AI, CN, OS..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "18px",
                  bgcolor: "#1e293b",
                  color: "white",

                  "& fieldset": {
                    borderColor: "#334155",
                  },

                  "&:hover fieldset": {
                    borderColor: "#2563eb",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#3b82f6",
                  },
                },

                "& textarea": {
                  color: "white",
                },

                "& textarea::placeholder": {
                  color: "#94a3b8",
                  opacity: 1,
                },
              }}
            />

            <Button
              variant="contained"
              onClick={askAI}
              disabled={loading || !message.trim()}
              sx={{
                minWidth: 60,
                height: 56,
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
                boxShadow: "0 8px 30px rgba(37,99,235,.35)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg,#1d4ed8,#6d28d9)",
                },
              }}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  sx={{ color: "white" }}
                />
              ) : (
                <SendIcon />
              )}
            </Button>

          </Box>

          <Typography
            mt={1.5}
            align="center"
            fontSize={12}
            color="#94a3b8"
          >
            Press <strong>Enter</strong> to send • <strong>Shift + Enter</strong> for a new line
          </Typography>

        </Paper>

      </Box>

    </Box>
  );
}

export default Chat;