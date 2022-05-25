export const Navigation = {
  go: (path: string) => {
    window.history.pushState({}, '', path);
  },
};
