export const formatTime = (timestamp) => {
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return timestamp.toLocaleTimeString([], options);
};
