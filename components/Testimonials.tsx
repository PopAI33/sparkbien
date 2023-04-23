import Image from "next/image";

const testimonials = [
  [
    {
      content: "So good! I need this right now. Congrats on the launch!",
      link: "https://twitter.com/eveporcello/sta",
      author: {
        name: "Eve Porcello",
        role: "Engineer & Author",
        image: "/eve.jpg",
      },
    },

    {
      content:
        "Finally! Something to help me get over my indecisiveness when decorating my house!",
      link: "https://twitter.com/arthur_dvorkin/sta",
      author: {
        name: "Arthur Dvorkin",
        role: "Engineer",
        image: "/arthur.jpg",
      },
    },
  ],
  [
    {
      content:
        "This is incredible, I can't believe how fast this generates a total new render of my room. I'm so excited to use this!",
      link: "https://www.tiktok.com/@thenubians/vide",
      author: {
        name: "Ade Dada",
        role: "Startup Founder",
        image: "/ade.jpeg",
      },
    },
    {
      content:
        "I haven't changed my room layout for 5 years, but this app may change that. Great job.",
      link: "https://twitter.com/RobAttfi",
      author: {
        name: "Rob Attfield",
        role: "Software Engineer",
        image: "/rob.jpg",
      },
    },
  ],
 
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="z-10 flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:-mt-10 -mt-10 bg-white"
    >
      <div className="mt-20 mb-20 mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-2xl tracking-tight font-medium text-black sm:text-6xl">
            Join the Sparkitect revolution!
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-stone-400  text-gray-500 leading-7">
            See what our first 100k users are saying about the product.
          </p>
        </div>
        <ul
          role="list"
          className="flex justify-center content-center mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-2"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  
                      <figure className="relative text-right rounded-3xl bg-zinc-100 p-6 shadow-xl shadow-grey-200">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-stone-600">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-left justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-left text-base text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-teal-500 text-white">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-left text-sm text-gray-400">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="picture of the testimonial author"
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    
                 
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
