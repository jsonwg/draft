onmessage = (e) => {
  const timer = setTimeout(() => {
    postMessage(e.data - 1);
  }, 990);
};
