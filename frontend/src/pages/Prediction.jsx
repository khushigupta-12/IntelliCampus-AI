import { useState } from "react";
import api from "../services/api";

function Prediction() {

  const [attendance, setAttendance] = useState("");
  const [internal, setInternal] = useState("");
  const [study, setStudy] = useState("");

  const [prediction, setPrediction] = useState("");
  const [score, setScore] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const predict = async () => {

    setLoading(true);
    setError("");

    try {

      const res = await api.post("/prediction/", {
        attendance: Number(attendance),
        study_hours: Number(study),
        internal_marks: Number(internal),
      });

      setPrediction(res.data.prediction);
      setScore(res.data.score);

    } catch (err) {

      console.log(err);

      setError("Prediction Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-10">

        <div className="grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl lg:grid-cols-2">

          {/* LEFT */}

          <div className="hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 p-12 text-white lg:flex lg:flex-col lg:justify-between">

            <div>

              <h1 className="text-4xl font-bold">
                🧠 AI Performance Predictor
              </h1>

              <p className="mt-6 text-lg leading-8 text-cyan-100">
                Predict student academic performance using
                Artificial Intelligence.
              </p>

              <div className="mt-12 space-y-5">

                <div className="rounded-2xl bg-white/10 p-5">
                  📊 Attendance Analysis
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  📚 Study Behaviour
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  🎯 AI Score Prediction
                </div>

              </div>

            </div>

            <p className="text-cyan-100">
              Powered by FastAPI & Gemini AI
            </p>

          </div>

          {/* RIGHT */}

          <div className="bg-white p-8 md:p-12">

            <h2 className="text-4xl font-bold text-slate-900">
              Predict Performance
            </h2>

            <p className="mt-3 text-slate-500">
              Enter student academic details.
            </p>

            <div className="mt-8 space-y-5">

              <div>

                <label className="mb-2 block font-medium">
                  Attendance (%)
                </label>

                <input
                  type="number"
                  value={attendance}
                  onChange={(e)=>setAttendance(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium">
                  Internal Marks
                </label>

                <input
                  type="number"
                  value={internal}
                  onChange={(e)=>setInternal(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium">
                  Study Hours
                </label>

                <input
                  type="number"
                  value={study}
                  onChange={(e)=>setStudy(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />

              </div>
                            {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              <button
                onClick={predict}
                disabled={loading}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="opacity-20"
                      />

                      <path
                        fill="currentColor"
                        className="opacity-90"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>

                    Predicting...
                  </div>
                ) : (
                  "Predict Performance"
                )}
              </button>

            </div>

            {prediction && (

              <div className="mt-10 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-6">

                <h3 className="text-xl font-bold text-slate-800">
                  Prediction Result
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-2">

                  <div className="rounded-xl bg-white p-5 shadow-sm">

                    <p className="text-sm text-slate-500">
                      Prediction
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-cyan-700">
                      {prediction}
                    </h2>

                  </div>

                  <div className="rounded-xl bg-white p-5 shadow-sm">

                    <p className="text-sm text-slate-500">
                      AI Score
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-indigo-700">
                      {score}
                    </h2>

                  </div>

                </div>

                <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">

                  <h4 className="font-semibold text-slate-800">
                    Input Summary
                  </h4>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Attendance
                      </p>

                      <p className="mt-1 text-lg font-semibold text-slate-800">
                        {attendance}%
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Internal Marks
                      </p>

                      <p className="mt-1 text-lg font-semibold text-slate-800">
                        {internal}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Study Hours
                      </p>

                      <p className="mt-1 text-lg font-semibold text-slate-800">
                        {study} hrs/day
                      </p>
                    </div>

                  </div>

                </div>

                <div className="mt-6 rounded-xl border border-green-100 bg-green-50 p-5">

                  <h4 className="font-semibold text-green-800">
                    AI Recommendation
                  </h4>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-green-700">
                    <li>✅ Maintain consistent attendance above 85%.</li>
                    <li>✅ Revise topics regularly instead of studying only before exams.</li>
                    <li>✅ Increase daily study hours if your score is below expectations.</li>
                    <li>✅ Focus on improving internal assessments and assignments.</li>
                  </ul>

                </div>

              </div>

            )}

            <div className="mt-10">

              <div className="mb-4 h-px bg-slate-200"></div>

              <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
                Powered By
              </p>

              <div className="flex flex-wrap justify-center gap-3">

                <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                  ⚛ React
                </span>

                <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                  ⚡ FastAPI
                </span>

                <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                  🤖 AI Prediction
                </span>

                <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                  🔐 JWT
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Prediction;