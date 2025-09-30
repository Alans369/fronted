import { useEffect, useState } from 'react'
import Pagination from './Pagination';
import Card from './Card';
import Navbar from './Navbar';
import type { Noticia } from './helper/Types';
import { serviceNoticia } from './services/Noticia';

const NoticiasCliente = () => {

  const [noticias, setNoticias] = useState<Noticia[]>([{
    id: 0,
    titulo: '',
    contenido: '',
    fechaPublicacion: '',
    categoria: { id: 0, nombre: '' }
  }])

  const [noticia, setNoticia] = useState<Noticia[]>([{
    id: 0,
    titulo: '',
    contenido: '',
    fechaPublicacion: '',
    categoria: { id: 0, nombre: '' }
  }])

  const [pagination, setPagination] = useState(0)



  async function getnoticia() {

    const http = new serviceNoticia();
    try {
      const result = await http.getAllCliente(pagination)

      console.log(result)
      setNoticias(result.content)
      //   page.current=result.totalPages
    } catch (error) {
      console.log(error)

    }//finally{
    //setCargando(false);
  }


  useEffect(() => {
    getnoticia()
  }, [pagination]);


    useEffect(() => {
    
  async function getnoticia() {

    const http = new serviceNoticia();
    try {
      const result = await http.getAllCliente(pagination)

      console.log(result)
      setNoticia(result.content)
      //   page.current=result.totalPages
    } catch (error) {
      console.log(error)

    }//finally{
    //setCargando(false);
  }

   getnoticia()
  }, []);



  const cardData = [
    {
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      title: "The Rise of Quantum Computing",
      description: "Exploring the next frontier of computational power and its potential impact on various industries worldwide.",
    },
    {
      title: "AI in Modern Healthcare",
      description: "How artificial intelligence is revolutionizing diagnostics, treatment plans, and patient care.",
    },
    {
      title: "Sustainable Energy Solutions",
      description: "A look into the latest innovations in solar, wind, and geothermal power generation technologies.",
    },
    {
      title: "The Future of Remote Work",
      description: "Analyzing the tools and cultural shifts that are shaping the modern distributed workforce.",
    },
    {
      title: "Exploring the Deep Sea",
      description: "Discover the mysteries lurking beneath the waves and the technology used to explore the ocean depths.",
    },
  ];
  const slides = [
    {
      type: 'image',
      url: 'https://placehold.co/1200x400/313442/ffffff?text=Diapositiva+1',
      alt: 'Imagen de marcador de posición 1'
    },
    {
      type: 'text',
      content: '¡Hola! Esto es una diapositiva de texto.'
    },
    {
      type: 'image',
      url: 'https://placehold.co/1200x400/4F46E5/ffffff?text=Diapositiva+3',
      alt: 'Imagen de marcador de posición 3'
    },
    {
      type: 'image',
      url: 'https://placehold.co/1200x400/10B981/ffffff?text=Diapositiva+4',
      alt: 'Imagen de marcador de posición 4'
    },
    {
      type: 'image',
      url: 'https://placehold.co/1200x400/F97316/ffffff?text=Diapositiva+5',
      alt: 'Imagen de marcador de posición 5'
    }
  ];

  // Estado para mantener el índice de la diapositiva actual.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la diapositiva anterior.
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Función para ir a la siguiente diapositiva.
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Función para ir a una diapositiva específica haciendo clic en los puntos.
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // useEffect para el cambio automático de diapositivas.
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    // Limpia el intervalo cuando el componente se desmonta o el índice cambia.
    return () => clearInterval(slideInterval);
  }, [currentIndex]);


  return (

    <div className=' w-5/5 h-[150px] max-h-100px'>
      <Navbar></Navbar>

      <div className=" bg-gray-100 dark:bg-gray-100 flex items-center justify-center p-4 font-sans">

        <div className="flex gap-10">hhcdcdc</div>


        <div id="default-carousel" className="relative w-full max-w-4xl w-2/5" data-carousel="slide">
          {/* Contenedor principal del carrusel */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96 shadow-lg">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                data-carousel-item
              >
                {slide.type === 'image' ? (
                  <img
                    src={slide.url}
                    className="absolute block w-full h-full object-cover"
                    alt={slide.alt}
                  />
                ) : (
                  <div className="absolute flex items-center justify-center w-full h-full bg-indigo-500">
                    <span className="text-white text-2xl font-bold p-4 text-center">{slide.content}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Indicadores de diapositiva (puntos) */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {slides.map((_, slideIndex) => (
              <button
                key={slideIndex}
                type="button"
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'
                  }`}
                aria-current={currentIndex === slideIndex}
                aria-label={`Slide ${slideIndex + 1}`}
                onClick={() => goToSlide(slideIndex)}
              ></button>
            ))}
          </div>

          {/* Botón de control: Anterior */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-200 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          {/* Botón de control: Siguiente */}
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-200 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        <div className="flex gap-10">hhcdcdc</div>

      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {/* Usamos .map() para iterar sobre nuestros datos y renderizar 
          un componente Card para cada elemento. 
        */}
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>


      <Pagination></Pagination>

    </div>
  );

}

export default NoticiasCliente
