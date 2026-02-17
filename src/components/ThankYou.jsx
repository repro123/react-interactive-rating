import illustration from "../images/illustration-thank-you.svg";

export default function ThankYouCard({ rating }) {
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
