const path = require("path");

export interface Path {
  web: string,
  backend: string,
  app: string,
  templates: string,
  routes: string,
};

export interface AppConfig {
  path: Path;
};

export const baseDir = path.join(__dirname, "../../");
export const srcDir = path.join(__dirname, "../");

console.log(baseDir);

export const config: AppConfig = {
  path: {
    web: baseDir + "web/",
    backend: srcDir + "backend/",
    app: srcDir + "app/",
    templates: srcDir + "templates/",
    routes: srcDir + "backend/routes/",
  }
};
