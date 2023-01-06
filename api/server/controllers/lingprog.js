import { LingProgModule } from "../models/lingprog.js";

export const getALLLingProg = async (req, res) => {
  const LingProg = await LingProgModule.findAll({ where: {} });
  return res.send({ LingProg });
};

export const getLingProgId = async (req, res) => {
  const id = req.params.id;
  const LingProg = await LingProgModule.findByPk(id);
  if (LingProg === null) {
    res.send("Não existe linguagem de programação com id: " + id);
  }
  res.send({ LingProg });
};

export const newLingProg = async (req, res) => {
  const newLingProg = {
    title: req.body.title,
    description: req.body.description
  };
  await LingProgModule.create(newLingProg);

  res.send({ newLingProg });
};

export const updateLingProg = async (req, res) => {
  const id = req.params.id;
  const LingProgUpdated = {
    title: req.body.title,
    description: req.body.description,
  };
  const LingProg = await ProgrammingModule.findByPk(id);
  if (LingProg !== null) {
    LingProg.update(LingProgUpdated);
    return res.send("Linguagem de programação atualizada");
  } else {
    return res.send("Não existe linguagem de programação com id: " + id);
  }
};

export const deleteLingProg = async (req, res) => {
  const id = req.params.id;
  const LingProg = await LingProgModule.findByPk(id);
  if (LingProg !== null) {
    LingProg.destroy({ where: { id: id } });
    return res.send("Linguagem de programação  removida");
  } else {
    return res.send("Não existe linguagem de programação com id: " + id);
  }
};
