import { useEffect, useRef, useState } from 'react'

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
  const page =  useRef(0)




  async function getnoticia() {

    const http = new serviceNoticia();
    try {
      const result = await http.getAllCliente(pagination)

      console.log(result)
      setNoticias(result.content)
       page.current=result.totalPages
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
    
    } catch (error) {
      console.log(error)

    }//finally{
    //setCargando(false);
  }

   getnoticia()
  }, []);



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
  const goToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  };

  // useEffect para el cambio automático de diapositivas.
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    // Limpia el intervalo cuando el componente se desmonta o el índice cambia.
    return () => clearInterval(slideInterval);
  }, [currentIndex]);


  
            const items = [];

            for (let i = 0; i < page.current; i++) {
                items.push(<li onClick={()=>{setPagination(i)}} 
        className="flex items-center justify-center shrink-0 bg-blue-500  border-2 border-blue-500 cursor-pointer text-base font-medium text-white w-10 h-10 rounded-full">
        {i+1}
      </li>);
            }


  return (

    <div className=' w-5/5 h-[150px] max-h-100px'>
      <Navbar></Navbar>

      <div className=" bg-gray-100 dark:bg-gray-100 flex items-center justify-center p-4 font-sans">

<div className="flex gap-10 h-40"> <img className='pr-2 ' src="https://www.mailjet.com/wp-content/uploads/2025/04/GIF-coca.gif" alt=""  /></div>

        <div id="default-carousel" className="relative w-full max-w-4xl w-2/5" data-carousel="slide">
          {/* Contenedor principal del carrusel */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96 shadow-lg">
            {noticia.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                data-carousel-item
              >
              
                  <div className="absolute flex items-center justify-center w-full h-full bg-indigo-500">
                    <span className="text-white text-2xl font-bold p-4 text-center">{`Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo) ${slide.contenido}`}</span>
                  </div>
                
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

        <div className="flex gap-10"><img className='ml-2'  src="data:image/jpeg;base64,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" alt=""  /></div>

      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {/* Usamos .map() para iterar sobre nuestros datos y renderizar 
          un componente Card para cada elemento. 
        */}
        {noticias.map((card, index) => (
          <Card key={index} title={card.titulo} description={card.contenido} />
        ))}
      </div>


      <div>
        <ul className="flex space-x-5 justify-center">
      <li className="flex items-center justify-center shrink-0 bg-gray-100 w-10 h-10 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-300" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>
      </li>
      {items  }
      <li className="flex items-center justify-center shrink-0 hover:bg-gray-50 border-2 border-gray-200 cursor-pointer w-10 h-10 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
          <path
            d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
            data-original="#000000" />
        </svg>
      </li>
    </ul>
      
    </div>

    </div>
  );

}

export default NoticiasCliente
