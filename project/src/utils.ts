export const getFormattedRatig= (rating: number ): string => {
  if (rating > 0 && rating < 3) {
    return 'Bad';
  }

  if (rating >= 3 && rating < 5) {
    return 'Normal';
  }

  if (rating >= 5 && rating < 8) {
    return 'Good';
  }

  if (rating >= 8 && rating < 10) {
    return 'Good';
  }

  if (rating === 10 ) {
    return 'Awesome';
  }

  return 'Incorrect';
};

export const getTimeFromMins = (mins: number): string => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;

  return `${hours}:${minutes}`;
};
