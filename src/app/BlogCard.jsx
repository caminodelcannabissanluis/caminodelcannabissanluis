







export default () => {

  const posts = [
      {
          title: "El Jardín de Jah",
          desc: "🌿Vivero orgánico-San Luis capital🌿 📱Whatsapp: 2664-360646 🍄Sustratos-Semillas- Bionsumos-Plantines-Suelo vivo🍄 ⏲️Lunes a viernes de 10am a 20hs ⏲️",
          img: "images/thumb_jardin",
          authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
          authorName: "Sidi dev",
          date: "Jan 4 2022",
          href: "https://www.instagram.com/el_jardin_de_jah.sl"
      },
      {
          title: "Abuelo Huachuma Semillas",
          desc: "⭐ Banco de semillas cannábicas. 🌱 Fotoperiódicas, Autoflorecientes. ✨ Genéticas de autor",
          img: "thumb_abuelo",
          authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
          authorName: "Micheal",
          date: "Jan 4 2022",
          href: "javascript:void(0)"
      },

  ]
  
  return (
      <section className="mt-12 mx-auto px-1 max-w-screen-xl md:px-8">
<h1 className="text-xl text-white-900"> El Camino del Cannabis en San Luis</h1>
<h2 className="text-xl text-white-900">   Recorriendo la información para el crecimiento</h2>
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
              {
                  posts.map((items, key) => (
                      <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                          <a href={items.href}>
                              <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">


                              </div>
                              <div className="pt-3 ml-4 mr-2 mb-3">
                                  <h3 className="text-xl text-white-900">
                                      {items.title}
                                  </h3>
                                  <p className="text-white-400 text-sm mt-1">{items.desc}</p>
                              </div>
                          </a>
                      </article>
                  ))
              }
          </div>
      </section>
  )
}
