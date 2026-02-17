import { useState } from "react";
import RatingCard from "./RatingCard.jsx";
import ThankYouCard from "./ThankYou.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="min-h-dvh bg-bodyBg text-cardText flex flex-col items-center justify-center font-ovepass leading-normal">
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  const [rating, setRating] = useState(null);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    rating ? setError("") : setError("Please select a rating");
    rating && setSummary(true);
  }

  return (
    <main className="grow grid place-items-center px-4">
      <div className="w-full max-w-104">
        {summary ? (
          <ThankYouCard rating={rating} />
        ) : (
          <RatingCard
            setRating={setRating}
            onSubmission={handleSubmit}
            rating={rating}
            error={error}
          />
        )}
      </div>
    </main>
  );
}

export default App;
