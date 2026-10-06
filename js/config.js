/* ====== DATOS EDITABLES ======
   Acá cambiás precio, código Downloader, link de celular y textos. */
window.SITE = {
  whatsapp: "5493765247994",   // tu número con código de país (sin + ni espacios)
  problems: [
    { title: "«NO SE HA PODIDO INSTALAR LA APLICACIÓN»",
      text: "Estimado usuario, es muy posible que necesite liberar espacio de almacenamiento. Vaya a Ajustes del televisor, busque el apartado de Aplicaciones y desinstale las aplicaciones que no use. Luego vuelva a intentar la instalación." },
    { title: "«DOWNLOADER NO TIENE PERMISOS PARA INSTALAR FUENTES DESCONOCIDAS»",
      text: "No se preocupe, es normal. Solo debe ir a Ajustes desde el mismo cartel que le aparece, habilitar a Downloader, salir y volver a intentar la instalación." }
  ],
  product: {
    id: "femon", name: "Femon Plus", price: "$8.000", logo: "img/femon.svg",
    downloader: "5065230", video: "videos/femon_video.mp4",
    mobileLink: "https://app.femon.net/femonplus/descargas/femonappplus.html",
    features: [
      "Canales de TV, deportes y pack fútbol",
      "Delay de 2 segundos",
      "Canales con calidad FULL HD / ALTA",
      "Requisito de internet: 3 megas o más",
      "Más de 50 mil películas en alta calidad (para verlas en alta calidad se necesita mejor internet)",
      "!Aclaración: tiene series, pero el buscador no las encuentra, hay que buscarlas a mano",
      "Pack de adultos con código de seguridad" ]
  }
};
