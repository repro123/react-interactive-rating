import { useState } from "react";
import icon from "./images/icon-star.svg";
import illustration from "./images/illustration-thank-you.svg";

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

function RatingCard({ setRating, onSubmission, error, rating }) {
  return (
    <div className="bg-[radial-gradient(100%_100%_at_50%_0%,var(--color-gradient-1)_0%,var(--color-gradient-2)_100%)] rounded-xl p-6 sm:p-8 w-full flex-col gap-4 flex">
      <RatingCardText />
      <RatingCardForm
        setRating={setRating}
        onSubmission={onSubmission}
        error={error}
        rating={rating}
      />
    </div>
  );
}

function RatingCardText() {
  return (
    <>
      <div className="bg-cardBg p-2 rounded-full w-12 h-12 flex items-center justify-center">
        <img src={icon} alt="" className="animate-bounce" />
      </div>
      <h1 className="sr-only">Rating Card</h1>
      <h2 className="text-cardHead text-3xl mt-4">How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </>
  );
}

function RatingCardForm({ setRating, onSubmission, error, rating }) {
  return (
    <form onSubmit={onSubmission}>
      <fieldset className="grid gap-3">
        <legend className="sr-only">Ratings</legend>
        <div className="flex items-center justify-between">
          {Array.from({ length: 5 }, (_, i) => (
            <RatingCardInputs key={i} value={i + 1} onSetRating={setRating} />
          ))}
        </div>
        <RatingCardErrorState error={error} rating={rating} />
      </fieldset>

      <RatingCardSubmitButton />
    </form>
  );
}

function RatingCardInputs({ value, onSetRating }) {
  return (
    <label
      htmlFor={value}
      className="bg-cardBg p-2 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-cardHead cursor-pointer hover:text-bodyBg active:text-bodyBg has-checked:bg-primary-orange has-checked:text-bodyBg transition-colors duration-300 ease-in-out"
    >
      {value}
      <input
        type="radio"
        name="rating"
        id={value}
        value={value}
        className="sr-only"
        onChange={(e) => onSetRating(+e.target.value)}
      />
    </label>
  );
}

function RatingCardErrorState({ error, rating }) {
  return (
    <p aria-live="assertive" id="errorMessage" className="text-red-300">
      {rating ? "" : error}
    </p>
  );
}

function RatingCardSubmitButton() {
  return (
    <button
      type="submit"
      id="submit"
      className="border-2 border-primary-orange w-full p-2 rounded-full uppercase text-bodyBg hover:bg-cardHead bg-primary-orange font-bold tracking-wider mt-4 cursor-pointer"
    >
      Submit
    </button>
  );
}

function ThankYouCard({ rating }) {
  return (
    <div className="bg-[radial-gradient(100%_100%_at_50%_0%,var(--color-gradient-1)_0%,var(--color-gradient-2)_100%)] rounded-xl p-6 sm:p-8 w-full flex-col gap-4 flex items-center justify-center text-center">
      <img src={illustration} alt="" />
      <p className="mt-4 text-primary-orange rounded-full bg-cardBg py-2 px-4">
        You selected {rating} out of 5
      </p>
      <p className="text-3xl text-cardHead">Thank you!</p>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-auto text-center text-sm sm:text-base pb-2 text-cardText">
      <p className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-primary-orange underline hover:no-underline"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          href="https://github.com/repro123/"
          className="text-primary-orange underline hover:no-underline"
          target="_blank"
        >
          Bello Ibrahim
        </a>
        .
      </p>
    </footer>
  );
}

export default App;
