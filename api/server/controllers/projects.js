import { ProjectsModule } from "../models/projects.js";

export const getALLProjects = async (req, res) => {
  const Projects = await ProjectsModule.findAll({ where: {} });
  return res.send({ Projects });
};

export const getProjectsid = async (req, res) => {
  const id = req.params.id;
  const Projects = await ProjectsModule.findByPk(id);
  if (Projects === null) {
    res.send("Não existe projeto com id: " + id);
  }
  res.send({ Projects });
};

export const newProjects = async (req, res) => {
  const newProjects = {
    title: req.body.title,
    description: req.body.description
  };
  await ProjectsModule.create(newProjects);

  res.send({ newProjects });
};

export const updateProjects = async (req, res) => {
  const id = req.params.id;
  const ProjectsUpdated = {
    title: req.body.title,
    description: req.body.description
  };
  const Projects = await ProjectsModule.findByPk(id);
  if (Projects !== null) {
    Projects.update(ProjectsUpdated);
    return res.send("Projeto atualizado");
  } else {
    return res.send("Não existe projeto com id: " + id);
  }
};

export const deleteProjects = async (req, res) => {
  const id = req.params.id;
  const Projects = await ProjectsModule.findByPk(id);
  if (Projects !== null) {
    Projects.destroy({ where: { id: id } });
    return res.send("Projeto removido");
  } else {
    return res.send("Não existe projeto com id: " + id);
  }
};
