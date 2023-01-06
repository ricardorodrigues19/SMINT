import { EducacaoModule } from "../models/educacao.js";

export const getALLEducacao = async (req, res) => {
  const Educacao = await EducacaoModule.findAll({ where: {} });
  return res.send({ Educacao });
};

export const getEducacaoid = async (req, res) => {
  const id = req.params.id;
  const Educacao = await EducacaoModule.findByPk(id);
  if (Educacao === null) {
    res.send("Não existe educação com id: " + id);
  }
  res.send({ Educacao });
};

export const newEducacao = async (req, res) => {
  const newEducacao = {
    title: req.body.title,
    description: req.body.description,
    type: req.body.type
  };
  await EducacaoModule.create(newEducacao);

  res.send({ newEducacao });
};

export const updateEducacao = async (req, res) => {
  const id = req.params.id;
  const EducacaoUpdated = {
    title: req.body.title,
    description: req.body.description,
    type: req.body.type
  };
  const Educacao = await EducacaoModule.findByPk(id);
  if (Educacao !== null) {
    Educacao.update(EducacaoUpdated);
    return res.send("Educação  atualizada");
  } else {
    return res.send("Não existe educação com id: " + id);
  }
};

export const deleteEducacao = async (req, res) => {
  const id = req.params.id;
  const Educacao = await EducacaoModule.findByPk(id);
  if (Educacao !== null) {
    Educacao.destroy({ where: { id: id } });
    return res.send("Educação removida");
  } else {
    return res.send("Não existe educação com id: " + id);
  }
};
