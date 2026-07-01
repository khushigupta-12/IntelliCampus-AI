function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">

          Platform Features

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <div className="shadow-lg rounded-xl p-8">

            <h3 className="text-xl font-bold">

              🤖 AI Assistant

            </h3>

            <p className="mt-4">

              Academic guidance powered by Gemini.

            </p>

          </div>

          <div className="shadow-lg rounded-xl p-8">

            <h3 className="text-xl font-bold">

              📅 Scheduling

            </h3>

            <p className="mt-4">

              Smart faculty appointment booking.

            </p>

          </div>

          <div className="shadow-lg rounded-xl p-8">

            <h3 className="text-xl font-bold">

              📊 Analytics

            </h3>

            <p className="mt-4">

              Appointment statistics and reports.

            </p>

          </div>

          <div className="shadow-lg rounded-xl p-8">

            <h3 className="text-xl font-bold">

              🧠 Prediction

            </h3>

            <p className="mt-4">

              Busy slot prediction using Machine Learning.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;