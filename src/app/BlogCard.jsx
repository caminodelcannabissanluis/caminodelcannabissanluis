







export default () => {

  const posts = [
      {
          title: "El Jardín de Jah",
          desc: "🌿Vivero orgánico-San Luis capital🌿 📱Whatsapp: 2664-360646 🍄Sustratos-Semillas- Bionsumos-Plantines-Suelo vivo🍄 ⏲️Lunes a viernes de 10am a 20hs ⏲️",
          img: "https://drive.google.com/file/d/1udgzA1-dSeR1vaYacl4kfps6Zn0ZS2jz/view?usp=sharing",

          href: "https://www.instagram.com/el_jardin_de_jah.sl"
      },
      {
          title: "Abuelo Huachuma Semillas",
          desc: "⭐ Banco de semillas cannábicas. 🌱 Fotoperiódicas, Autoflorecientes. ✨ Genéticas de autor",
          img: "https://drive.google.com/file/d/1hNthCsUfeWZPnCVW9Ulz9EfjzORQXLxJ/view?usp=drive_link",

          href: "https://www.instagram.com/abuelohuachuma/"
      },
      {
        title: "Rastapaz Grow",
        desc: "🏆 𝑆𝑎𝑛 𝐿𝑢𝑖𝑠 𝐶𝑎𝑝𝑖𝑡𝑎𝑙 🇦🇷. 📍𝑹𝒆𝒑𝒖𝒃𝒍𝒊𝒄𝒂 𝒅𝒆𝒍 𝑳𝒊𝒃𝒂𝒏𝒐 𝟖𝟏 🗺",
        img: ".https://drive.google.com/file/d/1sFMX5khGlo6A47pJnvxSr48cG-ShJWWe/view?usp=drive_link",

        href: "https://www.instagram.com/rastapaz_grow/"
    },

  ]
  
  return (
      <section className="mt-12 mx-auto px-1 max-w-screen-xl md:px-8">
<h1 className="text-3xl text-white-900"> El Camino del Cannabis en San Luis</h1>
 
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
              {
                  posts.map((items, key) => (
                      <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                          <a href={items.href}>
                              <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">


                              </div>
                              <div className="pt-3 ml-4 mr-2 mb-3">
                                  <h3 className="text-2xl text-purple-800">
                                      {items.title}
                                  </h3>
                                  <p className="text-purple-800 text-sm mt-1">{items.desc}</p>
                              </div>
                          </a>
                      </article>
                  ))
              }
          </div>
      </section>
  )
}
