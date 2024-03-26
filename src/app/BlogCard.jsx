



import Image from "next/image";




export default () => {

  const posts = [
      {
          title: "El Jardín de Jah",
          desc: "🌿Vivero orgánico-San Luis capital🌿 📱Whatsapp: 2664-360646 🍄Sustratos-Semillas- Bionsumos-Plantines-Suelo vivo🍄 ⏲️Lunes a viernes de 10am a 20hs ⏲️",
          img: "/thumb_jardin.jpg",

          href: "https://www.instagram.com/el_jardin_de_jah.sl"
      },
      {
          title: "Abuelo Huachuma",
          desc: "⭐ Banco de semillas cannábicas. 🌱 Fotoperiódicas, Autoflorecientes. ✨ Genéticas de autor",
          img: "/thumb_abuelo.jpg",

          href: "https://www.instagram.com/abuelohuachuma/"
      },
      {
        title: "Rastapaz Grow",
        desc: "🏆 𝑆𝑎𝑛 𝐿𝑢𝑖𝑠 𝐶𝑎𝑝𝑖𝑡𝑎𝑙 🇦🇷. 📍𝑹𝒆𝒑𝒖𝒃𝒍𝒊𝒄𝒂 𝒅𝒆𝒍 𝑳𝒊𝒃𝒂𝒏𝒐 𝟖𝟏 🗺",
        img: "/thumb_rasta.jpg",

        href: "https://www.instagram.com/rastapaz_grow/"
    },

    {
        title: "Mercedes Grow",
        desc: "🏆 𝑆𝑎𝑛 𝐿𝑢𝑖𝑠 𝐶𝑎𝑝𝑖𝑡𝑎𝑙 🇦🇷. 📍𝑹𝒆𝒑𝒖𝒃𝒍𝒊𝒄𝒂 𝒅𝒆𝒍 𝑳𝒊𝒃𝒂𝒏𝒐 𝟖𝟏 🗺",
        img: "/thumb_merc.jpg",

        href: "https://www.instagram.com/rastapaz_grow/"
    },

    {
        title: "Rastapaz Grow",
        desc: "🏆 𝑆𝑎𝑛 𝐿𝑢𝑖𝑠 𝐶𝑎𝑝𝑖𝑡𝑎𝑙 🇦🇷. 📍𝑹𝒆𝒑𝒖𝒃𝒍𝒊𝒄𝒂 𝒅𝒆𝒍 𝑳𝒊𝒃𝒂𝒏𝒐 𝟖𝟏 🗺",
        img: "/thumb_rasta.jpg",

        href: "https://www.instagram.com/rastapaz_grow/"
    },

    {
        title: "Rastapaz Grow",
        desc: "🏆 𝑆𝑎𝑛 𝐿𝑢𝑖𝑠 𝐶𝑎𝑝𝑖𝑡𝑎𝑙 🇦🇷. 📍𝑹𝒆𝒑𝒖𝒃𝒍𝒊𝒄𝒂 𝒅𝒆𝒍 𝑳𝒊𝒃𝒂𝒏𝒐 𝟖𝟏 🗺",
        img: "/thumb_rasta.jpg",

        href: "https://www.instagram.com/rastapaz_grow/"
    },
  ]
  
  return (
      <section className="mt-4 mx-auto px-1 max-w-screen-xl md:px-8">

<h1 className="font-sans md:text-6xl text-xl text-purple-900 mb-2"> El Camino del Cannabis en San Luis</h1>
<h1 className="text-xl text-purple-900"> Conocé a la gente moviendo el suelo de la movida local.</h1>
 
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-2">
              {
                  posts.map((items, key) => (
                      <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                          <a href={items.href}>

                              <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />


                              <div className="pt-3 ml-4 mr-2 mb-3">

                                  <h3 className="text-2xl text-purple-900">
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
