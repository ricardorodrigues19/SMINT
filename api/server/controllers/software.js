import { where } from "sequelize";
import { SoftwareModule } from "../models/software.js";

export const getALLSoftware = async (req, res) => {
  const Software = await SoftwareModule.findAll({ where: {} });
  return res.send({ Software });
};

export const getSoftwareid = async (req, res) => {
  const id = req.params.id;
  const Software = await SoftwareModule.findByPk(id);
  if (Software === null) {
    res.send("Não existe software com id: " + id);
  }
  res.send({ Software });
};

export const newSoftware = async (req, res) => {
  const newSoftware = {
    title: req.body.title,
    description: req.body.description
  };
  await SoftwareModule.create(newSoftware);

  res.send({ newSoftware });
};

export const updateSoftware = async (req, res) => {
  const id = req.params.id;
  const SoftwareUpdated = {
    title: req.body.title,
    description: req.body.description,
    isWanted: req.body.isWanted,
  };
  const Software = await SoftwareModule.findByPk(id);
  if (Software !== null) {
    Software.update(SoftwareUpdated);
    return res.send("Software  atualizado");
  } else {
    return res.send("Não existe software com id: " + id);
  }
};

export const deleteSoftware = async (req, res) => {
  const id = req.params.id;
  const Software = await SoftwareModule.findByPk(id);
  if (Software !== null) {
    Software.destroy({ where: { id: id } });
    return res.send("Software  removido");
  } else {
    return res.send("Não existe software com id: " + id);
  }
};
