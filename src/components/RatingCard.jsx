import icon from "../images/icon-star.svg";

export default function RatingCard({ setRating, onSubmission, error, rating }) {
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
