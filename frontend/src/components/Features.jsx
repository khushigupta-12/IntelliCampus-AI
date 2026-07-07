import SmartToyIcon from "@mui/icons-material/SmartToy";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SchoolIcon from "@mui/icons-material/School";
import SecurityIcon from "@mui/icons-material/Security";

function Features() {

  const features = [
    {
      icon: <SmartToyIcon sx={{ fontSize: 45, color: "#2563eb" }} />,
      title: "AI Academic Assistant",
      description:
        "Get instant answers to academic queries using Google Gemini AI with contextual and intelligent responses.",
    },
    {
      icon: <EventAvailableIcon sx={{ fontSize: 45, color: "#16a34a" }} />,
      title: "Smart Appointment Booking",
      description:
        "Book faculty appointments, manage schedules, and avoid conflicts with an organized scheduling system.",
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 45, color: "#ea580c" }} />,
      title: "Performance Prediction",
      description:
        "Predict student academic performance using AI models based on attendance and academic inputs.",
    },
    {
      icon: <PictureAsPdfIcon sx={{ fontSize: 45, color: "#9333ea" }} />,
      title: "PDF AI Assistant",
      description:
        "Upload study material and ask questions directly from PDF documents using AI-powered analysis.",
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 45, color: "#0891b2" }} />,
      title: "Faculty Recommendation",
      description:
        "Receive faculty recommendations based on subject expertise and academic requirements.",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 45, color: "#dc2626" }} />,
      title: "Secure Authentication",
      description:
        "Role-Based Access Control with JWT authentication ensures secure access for Students, Faculty, and Admin.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            Everything You Need in One Platform
          </h2>

          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            IntelliCampus AI combines Artificial Intelligence, smart scheduling,
            analytics, and secure campus management into one modern platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {feature.title}

              </h3>

              <p className="text-gray-600 mt-4 leading-8">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;