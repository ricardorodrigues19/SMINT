import { IdiomasModule } from "../models/idiomas.js";

export const getALLIdiomas = async (req, res) => {
  const Idiomas = await IdiomasModule.findAll({ where: {} });
  return res.send({ Idiomas });
};

export const getIdiomasid = async (req, res) => {
  const id = req.params.id;
  const Idiomas = await IdiomasModule.findByPk(id);
  if (Idiomas === null) {
    res.send("Não existe idioma com id: " + id);
  }
  res.send({ Idiomas });
};

export const newIdiomas = async (req, res) => {
  const newIdiomas = {
    title: req.body.title,
    description: req.body.description
  };
  await IdiomasModule.create(newIdiomas);

  res.send({ newIdiomas });
};

export const updateIdiomas = async (req, res) => {
  const id = req.params.id;
  const IdiomasUpdated = {
    title: req.body.title,
    description: req.body.description
  };
  const Idiomas = await IdiomasModule.findByPk(id);
  if (Idiomas !== null) {
    Idiomas.update(IdiomasUpdated);
    return res.send("Idiomas  atualizados");
  } else {
    return res.send("Não existe Idioma com id: " + id);
  }
};

export const deleteIdiomas = async (req, res) => {
  const id = req.params.id;
  const Idiomas = await IdiomasModule.findByPk(id);
  if (Idiomas !== null) {
    Idiomas.destroy({ where: { id: id } });
    return res.send("Idioma  removido");
  } else {
    return res.send("Não existe idioma com id: " + id);
  }
};

