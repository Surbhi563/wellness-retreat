import { format } from 'date-fns';

export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
  return format(date, "d MMMM, yyyy");
};
