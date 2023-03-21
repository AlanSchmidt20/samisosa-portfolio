const servicios = [
  {
    id: "1",
    title: "CONTENIDO \nPARA TU MARCA",
    img: require("../images/serviciosImage1.png"),
    service: "/ContenidoParaTuMarca",
    number: "#1",
  },
  {
    id: "2",
    title: "PORTFOLIO",
    img: require("../images/serviciosImage2.png"),
    service: "https://www.behance.net/gallery/164259707/Porfolio",
    number: "#2",
  },
  {
    id: "3",
    title: "MEDIA KIT & \nCONTACTO",
    img: require("../images/serviciosImage3.png"),
    service:
      "https://api.whatsapp.com/send?phone=+1161705336&text=Hola%20Sami!%20Me%20interesar%C3%ADa%20que%20trabajemos%20juntxs,%20me%20enviar%C3%ADas%20tu%20Media%20Kit?%20Muchas%20gracias%20%F0%9F%A4%8D",
    number: "#3",
  },
];

const modifiedServicios = servicios.map((item) => {
  const modifiedText = item.title.replace(/\n/g, "<br>");
  return {
    ...item,
    title: modifiedText,
  };
});

export default modifiedServicios;
