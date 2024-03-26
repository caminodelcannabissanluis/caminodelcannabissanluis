







export default () => {

  const posts = [
      {
          title: "El Jardín de Jah",
          desc: "🌿Vivero orgánico-San Luis capital🌿 📱Whatsapp: 2664-360646 🍄Sustratos-Semillas- Bionsumos-Plantines-Suelo vivo🍄 ⏲️Lunes a viernes de 10am a 20hs ⏲️",
          img: "https://instagram.fluq5-1.fna.fbcdn.net/v/t51.2885-19/238957838_384724639842665_2736983891945651160_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fluq5-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=j-HdOmnjQbgAX-kbXeI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBHD3PBNL-sRenrlw2QH3c4nQTi9lXHq06jSeagNyHikA&oe=6606B616&_nc_sid=8b3546",
          authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
          authorName: "Sidi dev",
          date: "Jan 4 2022",
          href: "https://www.instagram.com/el_jardin_de_jah.sl"
      },
      {
          title: "Abuelo Huachuma Semillas",
          desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
          img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
          authorName: "Micheal",
          date: "Jan 4 2022",
          href: "javascript:void(0)"
      },

  ]
  
  return (
      <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
<h1> El Camino del Cannabis en San Luis</h1>
<h2>   Recorriendo la información para el crecimiento</h2>
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
              {
                  posts.map((items, key) => (
                      <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                          <a href={items.href}>
                              <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                  <div className="flex-none w-10 h-10 rounded-full">
                                      <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                  </div>
                                  <div className="ml-3">
                                      <span className="block text-white-900">{items.authorName}</span>
                                      <span className="block text-white-400 text-sm">{items.date}</span>
                                  </div>
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
