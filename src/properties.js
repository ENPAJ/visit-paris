import site1 from "./media/notredame.jpg";
import site2 from "./media/louvre.jpg";
import site3 from "./media/sacrecoeur.jpg";

export const properties = [
  {
    id: "1",
    img: site1,
    name: "Cathédrale Notre-Dame de Paris",
    address: "Place Jean-Paul II, 75004 Paris",
    creation: "La construction a commencé en 1163 et s'est terminée en 1345.",
    style: { width: "350px", height: "200px" }, // Les propriétés 'width' et 'height' doivent commencer par une minuscule
  },
  {
    id: "2",
    img: site2,
    name: "Musée du Louvre",
    address: "Rue de Rivoli, 75001 Paris",
    creation: "Le Louvre a été fondé en 1793.",
    style: { width: "350px", height: "200px" }, // Les propriétés 'width' et 'height' doivent commencer par une minuscule
  },
  {
    id: "3",
    img: site3,
    name: "Basilique du Sacré-Cœur",
    address: "35 Rue du Chevalier de la Barre, 75018 Paris",
    creation: "La construction de la basilique a débuté en 1875 et s'est achevée en 1914.",
    style: { width: "350px", height: "200px" }, // Les propriétés 'width' et 'height' doivent commencer par une minuscule
  },
];
