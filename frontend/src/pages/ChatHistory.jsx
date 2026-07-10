import { useEffect, useState } from "react";
import api from "../services/api";

import {
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  Avatar,
  CircularProgress,
  TextField,
  InputAdornment,
} from "@mui/material";

import HistoryIcon from "@mui/icons-material/History";
import SearchIcon from "@mui/icons-material/Search";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";

function ChatHistory() {

  const [history, setHistory] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {

    loadHistory();

  }, []);

  const loadHistory = async () => {

    try {

      const res = await api.get("/chat/history");

      setHistory(res.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load chat history.");

    } finally {

      setLoading(false);

    }

  };

  const filteredHistory = history.filter((chat) => {

    const keyword = search.toLowerCase();

    return (

     (chat.question || "").toLowerCase().includes(keyword) ||
(chat.answer || "").toLowerCase().includes(keyword)

    );

  });

  return (

    <Box>

      {/* HERO */}

      <Paper
        elevation={0}
        sx={{
          p: 5,
          mb: 5,
          borderRadius: 5,
          color: "white",
          background:
            "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)",
        }}
      >

        <Typography
          variant="h3"
          fontWeight="bold"
        >
          AI Chat History 💬
        </Typography>

        <Typography
          mt={2}
          sx={{
            opacity: .9,
            fontSize: 18,
          }}
        >
          Browse and revisit your previous AI conversations.
        </Typography>

      </Paper>

      {/* SEARCH */}

      <TextField
        fullWidth
        placeholder="Search conversations..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        sx={{
          mb: 4,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* LOADING */}

      {loading && (

        <Card
          sx={{
            borderRadius: 5,
          }}
        >

          <CardContent>

            <Box
              display="flex"
              alignItems="center"
              gap={3}
            >

              <CircularProgress />

              <Typography>
                Loading previous conversations...
              </Typography>

            </Box>

          </CardContent>

        </Card>

      )}
            {/* EMPTY STATE */}

      {!loading && filteredHistory.length === 0 && (

        <Card
          sx={{
            borderRadius: 5,
            textAlign: "center",
            py: 6,
          }}
        >

          <CardContent>

            <Avatar
              sx={{
                bgcolor: "#2563eb",
                width: 70,
                height: 70,
                mx: "auto",
                mb: 3,
              }}
            >
              <HistoryIcon sx={{ fontSize: 35 }} />
            </Avatar>

            <Typography
              variant="h5"
              fontWeight="bold"
            >
              No Conversations Found
            </Typography>

            <Typography
              color="text.secondary"
              mt={2}
            >
              Start chatting with IntelliCampus AI to
              see your conversation history here.
            </Typography>

          </CardContent>

        </Card>

      )}

      {/* CHAT HISTORY */}

      {!loading &&

        filteredHistory.map((chat) => (

          <Card
            key={chat.id}
            sx={{
              borderRadius: 5,
              mb: 4,
              transition: ".3s",

              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 8,
              },
            }}
          >

            <CardContent>

              {/* Question */}

              <Box
                display="flex"
                gap={2}
                mb={3}
              >

                <Avatar
                  sx={{
                    bgcolor: "#2563eb",
                  }}
                >
                  <PersonIcon />
                </Avatar>

                <Box>

                  <Typography
                    fontWeight="bold"
                    mb={1}
                  >
                    You
                  </Typography>

                  <Typography>
                    {chat.question}
                  </Typography>

                </Box>

              </Box>

              {/* Answer */}

              <Box
                display="flex"
                gap={2}
              >

                <Avatar
                  sx={{
                    bgcolor: "#7c3aed",
                  }}
                >
                  <SmartToyIcon />
                </Avatar>

                <Box>

                  <Typography
                    fontWeight="bold"
                    mb={1}
                  >
                    IntelliCampus AI
                  </Typography>

                  <Typography
                    sx={{
                      whiteSpace: "pre-wrap",
                      lineHeight: 1.8,
                    }}
                  >
                    {chat.answer}
                  </Typography>

                </Box>

              </Box>

            </CardContent>

          </Card>

        ))}

    </Box>
  );
}

export default ChatHistory;