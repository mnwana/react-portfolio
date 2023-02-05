export const navClickEvent = (location) => {
  window.dataLayer.push({
    event: "auto_event",
    details: {
      location: location,
    },
  });
};

export const footerClickEvent = () => {
  window.dataLayer.push({
    event: "auto_event",
    details: {
      auto_event_name: "footerClick",
    },
  });
};
