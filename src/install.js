import bgDirective from "./index";

const install = (app) => {
  app.directive("bg", bgDirective);
};

export default install;