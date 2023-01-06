import Router from "express";

import {
  getALLIdiomas,
  getIdiomasid,
  newIdiomas,
  updateIdiomas,
  deleteIdiomas
} from "../controllers/idiomas.js";

import {
  getALLSoftware,
  getSoftwareid,
  newSoftware,
  updateSoftware,
  deleteSoftware,
} from "../controllers/software.js";

import {
  getALLLingProg,
  getLingProgId,
  newLingProg,
  updateLingProg,
  deleteLingProg,
} from "../controllers/lingprog.js";

import {
  getALLEducacao,
  getEducacaoid,
  newEducacao,
  updateEducacao,
  deleteEducacao,
} from "../controllers/educacao.js";


import {
  getALLProjects,
  getProjectsid,
  newProjects,
  updateProjects,
  deleteProjects,
} from "../controllers/projects.js";

const routes = Router();

routes.get("/Idiomas", getALLIdiomas);
routes.get("/Idiomas/:id", getIdiomasid);
routes.post("/newIdiomas", newIdiomas);
routes.post("/updateIdiomas/:id", updateIdiomas);
routes.delete("/deleteIdiomas/:id", deleteIdiomas);

routes.get("/Software", getALLSoftware);
routes.get("/Software/:id", getSoftwareid);
routes.post("/newSoftware", newSoftware);
routes.post("/updateSoftware/:id", updateSoftware);
routes.delete("/deleteSoftware/:id", deleteSoftware);

routes.get("/LingProg", getALLLingProg);
routes.get("/LingProg/:id", getLingProgId);
routes.post("/newLingProg", newLingProg);
routes.post("/updateLingProg/:id", updateLingProg);
routes.delete("/deleteLingProg/:id", deleteLingProg);

routes.get("/Educacao", getALLEducacao);
routes.get("/Educacao/:id", getEducacaoid);
routes.post("/newEducacao", newEducacao);
routes.post("/updateEducacao/:id", updateEducacao);
routes.delete("/deleteEducacao/:id", deleteEducacao);

routes.get("/Project", getALLProjects);
routes.get("/Project/:id", getProjectsid);
routes.post("/newProject", newProjects);
routes.post("/updateProject/:id", updateProjects);
routes.delete("/deleteProject/:id", deleteProjects);

export { routes };
