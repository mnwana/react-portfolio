export const navClickEvent = (location) => {
  window.dataLayer.push({
    event: "auto_event",
    details: {
      auto_event_name: "navClick",
      text: location,
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

export const projectOpenClickEvent = (projectTitle) => {
  window.dataLayer.push({
    event: "auto_event",
    details: {
      auto_event_name: "projectOpenClick",
      text: projectTitle
    },
  });
};