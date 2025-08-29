// Format a date string (YYYY-MM-DD) into "Aug 15, 2025" and using relative date

export function formatDate(dateInput) {
  const today = new Date();
  const date = new Date(dateInput);

  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  const diffMs = date - today;
  const diffdays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  const absoluteDate = date.toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  let relativeDate = "";

  if (diffdays === 0) {
    relativeDate = "Today";
  }
  if (diffdays === 1) {
    relativeDate = "Tomorrow";
  }
  if (diffdays === -1) {
    relativeDate = "Yesterday";
  }
  if (diffdays > 1 && diffdays <= 7) {
    relativeDate = `${diffdays} days from now`;
  }
  if (diffdays < -1 && diffdays >= -7) {
    relativeDate = `${Math.abs(diffdays)} days ago`;
  }

  return relativeDate ? `${absoluteDate} •${relativeDate}` : absoluteDate;
}

export function formatAbsoluteDate(dateInput) {
  const date = new Date(dateInput);
  const absoluteDate = date.toLocaleDateString("en-UK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return absoluteDate;
}
