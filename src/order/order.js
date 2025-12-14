export function Order({ isOpen, openHour, closeHour }) {
  return (
    <div>
      <blockquote className="orderQuote">We're currently {isOpen}</blockquote>
      <strong className="orderVisit">
        We're open until {closeHour}, Come visit us or order online.
      </strong>
    </div>
  );
}