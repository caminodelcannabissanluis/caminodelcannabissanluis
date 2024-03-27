



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
        title: "Rastapaz",
        desc: "🏆 𝑆𝑎𝑛 𝐿𝑢𝑖𝑠 𝐶𝑎𝑝𝑖𝑡𝑎𝑙 🇦🇷. 📍𝑹𝒆𝒑𝒖𝒃𝒍𝒊𝒄𝒂 𝒅𝒆𝒍 𝑳𝒊𝒃𝒂𝒏𝒐 𝟖𝟏 🗺",
        img: "/thumb_rasta.jpg",

        href: "https://www.instagram.com/rastapaz_grow/"
    },

    {
        title: "Mercedes Grow",
        desc: "👋 Hola, somos #MercedesGrow 🛸 Cultivo orgánico y mineral 👇💡 ILUMINACION 🧴 HIDROPONIA 🌱 FERTILIZANTES 🔎 ACCESORIOS 📦 ENVÍOS 📍 Villa Mercedes",
        img: "/thumb_merc.jpg",

        href: "https://linktr.ee/mercedesgrow"
    },

    {
        title: "La Feria Cannábica Ft. Festi 420",
        desc: "🌿🎉 ¡La quinta edición de La Feria Cannábica Ft. Festi 420 está en camino y viene con todo! 🎶🌟 El 27 de abril en @comuna.club , sumérgete en el mundo cannábico con feriantes, grandes marcas, música en vivo y talleres. Además, la tercera edición de la Copa Cannábica Rastapaz con categorías indoor, exterior y flower rosin. 💨💚 ¡Pronto más detalles, esta edición será épica! ",
        img: "/thumb_festi.jpg",

        href: "https://www.instagram.com/rastapaz_grow/"
    },

    {
        title: "Alma Mater Breeding Group",
        desc: "Banco de semillas de cannabis registrado en INASE. 🌱Semillas automáticas y fotoperiodicas. 🍊@jugo.oficial. Genéticas de colección.",
        img: "/thumb_alma.jpg",

        href: "https://www.instagram.com/almamaterseeds/"
    },
  ]
  
  return (
      <section className="mt-4 mx-auto px-1 max-w-screen-xl md:px-8">

<h1 className="font-another-cool-font md:text-6xl text-3xl text-slate-900 mb-2"> El Camino del Cannabis en San Luis</h1>
<h1 className="font-another-cool-font text-xl text-slate-900"> Conocé a la gente moviendo el suelo de la movida local.</h1>
 
          <div className=" mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {
                  posts.map((items, key) => (
                      <article className="max-w-md bg-blue-200  mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                          <a href={items.href}>

                              <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />


                              <div className="pt-3 ml-4 mr-2 mb-3">

                                  <h3 className=" font-cool-font text-2xl text-slate-900">
                                      {items.title}
                                  </h3>

                                  <p className="font-cool-font text-slate-800 text-sm mt-1">{items.desc}</p>
                              </div>
                          </a>
                      </article>
                  ))
              }
          </div>
      </section>
  )
}
