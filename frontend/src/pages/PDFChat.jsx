import { useState } from "react";
import api from "../services/api";

import {
  Box,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  CircularProgress,
  Divider,
  Chip,
} from "@mui/material";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DescriptionIcon from "@mui/icons-material/Description";

function PDFChat() {

  const [file, setFile] = useState(null);

  const [summary, setSummary] = useState("");

  const [loading, setLoading] = useState(false);

  const uploadPDF = async () => {

    if (!file) {

      alert("Please select a PDF.");

      return;

    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      setLoading(true);

setSummary("");

      const res = await api.post(
        "/pdf/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      setSummary(res.data.summary);

setFile(null);
    } catch (err) {

      console.error(err);

      alert("Failed to upload PDF");

    } finally {

      setLoading(false);

    }

  };

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
          PDF AI Assistant 📄
        </Typography>

        <Typography
          mt={2}
          sx={{
            opacity: .9,
            fontSize: 18,
          }}
        >
          Upload your study material and let AI
          generate an intelligent summary instantly.
        </Typography>

      </Paper>

      {/* UPLOAD CARD */}

      <Card
        sx={{
          borderRadius: 5,
          mb: 5,
        }}
      >

        <CardContent>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mb={3}
          >

            <Avatar
              sx={{
                bgcolor: "#2563eb",
              }}
            >
              <UploadFileIcon />
            </Avatar>

            <Box>

              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Upload PDF
              </Typography>

              <Typography color="text.secondary">
                Supports syllabus, notes,
                assignments and books.
              </Typography>

            </Box>

          </Box>

          <Divider sx={{ mb: 4 }} />

          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadFileIcon />}
            sx={{
              borderRadius: 3,
            }}
          >
            Choose PDF

            <input
              hidden
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />

          </Button>

          {file && (

            <Paper
              sx={{
                mt: 4,
                p: 3,
                borderRadius: 4,
                bgcolor: "#f8fafc",
              }}
            >

              <Box
                display="flex"
                alignItems="center"
                gap={2}
              >

                <PictureAsPdfIcon
                  color="error"
                  sx={{
                    fontSize: 45,
                  }}
                />

                <Box>

                  <Typography
                    fontWeight="bold"
                  >
                    {file.name}
                  </Typography>

                  <Chip
                    label="Ready for AI"
                    color="success"
                    size="small"
                    sx={{
                      mt: 1,
                    }}
                  />

                </Box>

              </Box>

            </Paper>

          )}

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              py: 1.5,
              borderRadius: 3,
            }}
            onClick={uploadPDF}
            disabled={loading || !file}
          >
            {loading
              ? "Uploading..."
              : "Generate AI Summary"}
          </Button>

        </CardContent>

      </Card>
            {/* LOADING */}

      {loading && (

        <Card
          sx={{
            borderRadius: 5,
            mb: 5,
          }}
        >

          <CardContent>

            <Box
              display="flex"
              alignItems="center"
              gap={3}
            >

              <CircularProgress />

              <Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  AI is reading your PDF...
                </Typography>

                <Typography color="text.secondary">
                  Please wait while IntelliCampus AI
                  analyzes your document.
                </Typography>

              </Box>

            </Box>

          </CardContent>

        </Card>

      )}

      {/* SUMMARY */}

      {summary && (

        <Card
          sx={{
            borderRadius: 5,
            mb: 5,
          }}
        >

          <CardContent>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              mb={3}
            >

              <Avatar
                sx={{
                  bgcolor: "#7c3aed",
                }}
              >
                <AutoAwesomeIcon />
              </Avatar>

              <Box>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  AI Generated Summary
                </Typography>

                <Typography color="text.secondary">
                  Summary generated from your uploaded PDF.
                </Typography>

              </Box>

            </Box>

            <Divider sx={{ mb: 3 }} />

            <Paper
              sx={{
                p: 3,
                bgcolor: "#f8fafc",
                borderRadius: 3,
                maxHeight: 450,
                overflowY: "auto",
              }}
            >

              <Typography
                sx={{
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.9,
                }}
              >
                {summary}
              </Typography>

            </Paper>

          </CardContent>

        </Card>

      )}

      {/* RECENT PDFs */}

      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Recent Documents
      </Typography>

      <Card
        sx={{
          borderRadius: 5,
          mb: 5,
        }}
      >

        <CardContent>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mb={3}
          >

            <DescriptionIcon color="error" />

            <Typography>
              Operating Systems Notes.pdf
            </Typography>

          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mb={3}
          >

            <DescriptionIcon color="error" />

            <Typography>
              Database Management System.pdf
            </Typography>

          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={2}
          >

            <DescriptionIcon color="error" />

            <Typography>
              Computer Networks.pdf
            </Typography>

          </Box>

        </CardContent>

      </Card>

      {/* AI TIPS */}

      <Card
        sx={{
          borderRadius: 5,
          background:
            "linear-gradient(135deg,#eff6ff,#eef2ff)",
        }}
      >

        <CardContent>

          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
          >
            💡 AI Tips
          </Typography>

          <Typography
            color="text.secondary"
            lineHeight={2}
          >
            • Upload clean PDF files for the best summaries.
            <br /><br />
            • Lecture notes and textbooks work best.
            <br /><br />
            • AI can summarize large documents within a few seconds.
            <br /><br />
            • Future updates will include PDF Question Answering and citation support.
          </Typography>

        </CardContent>

      </Card>

    </Box>
  );
}

export default PDFChat;