export const navClickEvent = (location) => {
  window.dataLayer.push({
    event: "nav_bar_click",
    details: {
      location: location,
    },
  });
};
