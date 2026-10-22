import { ProjectItem, BonusItem, TestimonialItem, FaqItem, StepRoadmap } from '../types';

export const HERO_IMAGE = 'hero_artisan_woman_1790123425974.jpg';
export const TREE_SPECIAL_IMAGE = 'macrame_tree_special_1790123441992.jpg';
export const MANDALA_LIVING_IMAGE = 'macrame_mandala_living_1790123455629.jpg';
export const WEAVING_HANDS_IMAGE = 'macrame_weaving_hands_1790123467220.jpg';
export const BOLSA_SANTORINI_IMAGE = 'bolsa_santorini_1792629638042.jpg';
export const BOLSO_BAHIA_IMAGE = 'bolso_playero_bahia_1792629639168.jpg';
export const TAPIZ_HOJAS_PLUMAS_IMAGE = 'tapiz_hojas_plumas_1792629640681.jpg';
export const TULA_VERONA_IMAGE = 'tula_verona_bombonera_1792629639861.jpg';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'bolsa-santorini',
    title: 'Bolsa Santorini',
    category: 'bolsos',
    technique: 'Nudo Plano reforzado & Festón cruzado con asas de bambú',
    difficulty: 'Principiante',
    estimatedTime: '4 - 5 horas',
    cordType: 'Cordón de algodón peinado 4mm',
    description: 'La pieza favorita de las alumnas. Un bolso estructurado y elegante con forro interior invisible y asas naturales. Perfecto para lucir o vender por más de $55 USD.',
    image: BOLSA_SANTORINI_IMAGE,
    highlights: ['Estructura firme que no se deforma', 'Inserción perfecta de asas de madera o bambú', 'Patrón de venta de alta demanda']
  },
  {
    id: 'tapiz-mandala-chakras',
    title: 'Mandala Circular de los Chakras',
    category: 'tapices',
    technique: 'Rombos concéntricos, nudo alondra y flecos en cascada',
    difficulty: 'Intermedio',
    estimatedTime: '6 horas',
    cordType: 'Cuerda trenzada 3.5mm cruda y tonos tierra',
    description: 'Una pieza decorativa de gran formato sobre aro de madera de 35cm. Inspirada en la armonización de energía y la meditación activa.',
    image: MANDALA_LIVING_IMAGE,
    highlights: ['Geometría simétrica impecable', 'Técnica de tensión constante sin ondulaciones', 'Ideal como pieza central de sala o dormitorio']
  },
  {
    id: 'arbol-mural-navideno',
    title: 'Colección Especial: Árbol Mural Luminoso',
    category: 'navidad',
    technique: 'Nudo festón escalonado, micro-luces cálidas y perlas de madera',
    difficulty: 'Principiante',
    estimatedTime: '3.5 horas',
    cordType: 'Cordón de algodón 4mm & ramas naturales',
    description: 'El proyecto estrella de fin de año. Un tapiz en forma de pino navideño con estrella rústica, rodajas de naranja seca y guirnalda de luz micro LED cálida.',
    image: TREE_SPECIAL_IMAGE,
    highlights: ['Diseño estacional de altísima rotación en ventas', 'Integración de iluminación LED sin cables visibles', 'Perfecto para regalar o decorar']
  },
  {
    id: 'bolso-bahia',
    title: 'Bolso Playero Bahía',
    category: 'bolsos',
    technique: 'Malla abierta en nudo plano alternado y trenza de 4 cabos',
    difficulty: 'Principiante',
    estimatedTime: '3 horas',
    cordType: 'Trapillo fino o cordón urdimbre 3mm',
    description: 'Bolsa bohemia de verano ultraligera y flexible. Aprenderás a crear una base sólida sin costuras y asas reforzadas ergonómicas.',
    image: BOLSO_BAHIA_IMAGE,
    highlights: ['Consumo de material súper económico', 'Rápido de tejer en una sola tarde', 'Resistencia a más de 5 kg de carga']
  },
  {
    id: 'tapiz-hojas-plumas',
    title: 'Tapiz Hojas & Plumas Botánicas',
    category: 'tapices',
    technique: 'Nudo espiral, peinado de fibras y fijador ecológico',
    difficulty: 'Principiante',
    estimatedTime: '2.5 horas',
    cordType: 'Urdimbre peinada 100% algodón 4mm',
    description: 'Aprende el secreto profesional para que las plumas y hojas de macramé queden firmes, alineadas y no se despeinen con la brisa.',
    image: TAPIZ_HOJAS_PLUMAS_IMAGE,
    highlights: ['Fórmula casera de fijador ecológico', 'Corte con plantilla para simetría perfecta', 'Acabado editorial de revista de decoración']
  },
  {
    id: 'tula-verona',
    title: 'Tula Verona (Bombonera)',
    category: 'bolsos',
    technique: 'Cierre corredizo, tejido tubular y borlas decorativas',
    difficulty: 'Intermedio',
    estimatedTime: '5 horas',
    cordType: 'Cordón torcido de 3 cabos 3.5mm',
    description: 'Elegancia pura estilo saco o bombonera. Aprenderás a tejer en círculo cerrado sin deformar la silueta y a colocar borlas finas con remate de barrilete.',
    image: TULA_VERONA_IMAGE,
    highlights: ['Tejido circular tridimensional sin costura', 'Cordón de ajuste con cuentas de teca', 'Precio de venta promedio: $65 - $80 USD']
  }
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 1,
    title: 'Directorio Secreto de Proveedores',
    subtitle: 'Nacionales e Internacionales',
    originalPrice: 37,
    description: 'La lista curada de fábricas y distribuidores mayoristas de cuerda, aros de madera, bambú y herrajes con envíos a toda América Latina, EE.UU. y Europa. Compra a precio de costo sin intermediarios.',
    iconName: 'Truck',
    tag: 'REGALO INCLUIDO',
    includes: ['Contactos directos de proveedores certificados', 'Precios con descuento por mayoreo', 'Guía de compra para evitar estafas online']
  },
  {
    id: 2,
    title: 'Ebook Maestra: Fibras, Cuerdas e Hilos',
    subtitle: 'La Enciclopedia Textil de la Tejedora',
    originalPrice: 27,
    description: 'Nunca más dudarás entre urdimbre, cuerda trenzada o torcida de 3 cabos. Sabrás exactamente qué calibre usar para que tus bolsos no cuelguen y tus tapices tengan caída perfecta.',
    iconName: 'BookOpen',
    tag: 'REGALO INCLUIDO',
    includes: ['Tabla comparativa de calibres (2mm a 9mm)', 'Cómo lavar y conservar piezas de algodón', 'Pruebas de resistencia al peso']
  },
  {
    id: 3,
    title: 'Masterclass: Cálculo de Metraje Exacto',
    subtitle: 'Cero Desperdicio de Cuerda',
    originalPrice: 35,
    description: 'La fórmula matemática simplificada para calcular con precisión milimétrica cuántos metros de cuerda cortar para cualquier proyecto nuevo, evitando que te quedes corta o botes material costoso.',
    iconName: 'Calculator',
    tag: 'REGALO INCLUIDO',
    includes: ['Fórmula paso a paso según el grosor del cordón', 'Plantilla descargable en PDF y Excel', 'Ejemplos resueltos para bolsos y murales']
  },
  {
    id: 4,
    title: 'Comunidad VIP "Círculo Nudos del Alma"',
    subtitle: 'Acompañamiento y Red de Apoyo',
    originalPrice: 49,
    description: 'Grupo exclusivo de alumnas donde compartes tus avances, resuelves dudas directamente con la instructora, recibes retroalimentación cálida y encuentras amigas tejedoras de todo el mundo.',
    iconName: 'Users',
    tag: 'REGALO INCLUIDO',
    includes: ['Sesiones mensuales de preguntas y respuestas en vivo', 'Retos creativos y exposiciones de alumnas', 'Entorno seguro, libre de juicios y lleno de amor']
  },
  {
    id: 5,
    title: 'Calculadora de Costos & Precios de Venta',
    subtitle: 'Plantilla Automática para Emprender',
    originalPrice: 29,
    description: 'Ingresa el costo del material y el tiempo invertido; la herramienta calcula automáticamente el precio justo de venta, tu ganancia neta y el margen para intermediarios. ¡Deja de cobrar barato por pena!',
    iconName: 'TrendingUp',
    tag: 'REGALO INCLUIDO',
    includes: ['Calculadora automatizada en Google Sheets y Excel', 'Módulo de valor por hora de trabajo artesanal', 'Guía para cotizar pedidos personalizados']
  },
  {
    id: 6,
    title: 'Bitácora Emocional & Diario de Tejedora',
    subtitle: 'Macramé Terapéutico en PDF Imprimible',
    originalPrice: 24,
    description: 'Un diario de reflexión consciente para registrar tu estado de ánimo antes y después de tejer, tus intenciones creativas para cada pieza y afirmaciones de reconexión interior.',
    iconName: 'HeartHandshake',
    tag: 'REGALO INCLUIDO',
    includes: ['Ejercicios de respiración previa al tejido', 'Fichas de intención para piezas de regalo', 'Rastreador de bienestar y mindfulness']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'sandra-m',
    name: 'Sandra Morales',
    age: 46,
    location: 'San José, Costa Rica',
    role: 'Contadora & Emprendedora',
    quote: 'Llegaba del trabajo con la cabeza saturada y una contractura permanente. El macramé fue la única terapia que logró silenciar mi mente. Hoy mi sala parece una galería y ya vendí 4 Bolsas Santorini entre mis compañeras.',
    finishedProject: 'Bolsa Santorini & Tapiz Hojas',
    rating: 5,
    story: 'Empezó sin saber cómo tomar la cuerda. A las 3 semanas completó su primer bolso estructurado.'
  },
  {
    id: 'marcela-v',
    name: 'Marcela Valencia',
    age: 39,
    location: 'Medellín, Colombia',
    role: 'Madre & Artesana',
    quote: 'Quería generar ingresos desde mi casa para no descuidar a mis dos hijos pequeños. Gracias a la calculadora del Bono 5 y al directorio de proveedores, monté mi tienda en Instagram y ya recuperé la inversión cinco veces.',
    finishedProject: 'Tula Verona & Colección Navideña',
    rating: 5,
    story: 'Vendió 18 árboles murales luminosos en la temporada decembrina pasada.'
  },
  {
    id: 'carmen-r',
    name: 'Carmen Rosalía Duarte',
    age: 53,
    location: 'Guadalajara, México',
    role: 'Docente Jubilada',
    quote: 'Pensé que por mi edad mis manos no tendrían la agilidad necesaria o que la tecnología del curso me complicaría. Los videos son tan claros, pausados y cariñosos que sentí a la maestra sentada a mi lado en la sala.',
    finishedProject: 'Mandala Circular de los Chakras',
    rating: 5,
    story: 'Creó el mandala de chakras para el consultorio de su hija psicóloga y ahora le piden pedidos los pacientes.'
  },
  {
    id: 'patricia-g',
    name: 'Patricia Gómez',
    age: 41,
    location: 'Santiago, Chile',
    role: 'Diseñadora de Interiores',
    quote: 'El nivel de los acabados es de verdadera alta costura artesanal. Nada de nudos flojos ni terminaciones desprolijas. Este programa enseña técnicas que no encuentras en ningún tutorial gratuito de YouTube.',
    finishedProject: 'Tapiz Mural Gran Formato',
    rating: 5,
    story: 'Incorporó piezas de macramé en sus proyectos de interiorismo residencial.'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: '¿Realmente puedo aprender si nunca en mi vida he hecho macramé?',
    answer: '¡Absolutamente sí! El 72% de nuestras alumnas nunca habían tomado un cordón en sus manos. Comenzamos desde cero absoluto: cómo colocar los hilos, cómo sostener las manos para no cansarte, y la anatomía de los tres nudos primordiales. Los videos están grabados en primer plano, en alta definición y a velocidad pausada para que sigas cada movimiento nudo a nudo.'
  },
  {
    id: 'faq-2',
    category: 'materiales',
    question: '¿Qué materiales necesito para empezar y dónde los consigo?',
    answer: 'Para arrancar sólo necesitas un ovillo o cono de cordón de algodón (recomendamos 3mm o 4mm), una tijera afilada y una cinta métrica. Con el Bono #1 (Directorio Secreto de Proveedores) tendrás acceso directo a distribuidores confiables en tu país que envían a domicilio a precios de fábrica económicos.'
  },
  {
    id: 'faq-3',
    category: 'acceso',
    question: '¿Tengo horarios fijos o puedo ver las clases cuando yo quiera?',
    answer: 'Las clases están 100% grabadas en la plataforma de alta velocidad. Tú tienes el control total: puedes verlas de noche, de mañana, los fines de semana o durante 15 minutos en tu pausa del café. Puedes pausar, retroceder y repetir cada lección tantas veces como necesites desde tu celular, tablet o computadora.'
  },
  {
    id: 'faq-4',
    category: 'acceso',
    question: '¿Por cuánto tiempo tendré acceso a los cursos y bonos?',
    answer: '¡El acceso es DE POR VIDA! No hay pagos mensuales, renovaciones anuales ni suscripciones ocultas. Con este pago único de $47 USD tendrás acceso ilimitado para siempre, incluyendo todas las futuras actualizaciones y nuevos proyectos que se agreguen a la Escuela.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: '¿Qué pasa si me quedo trabada en un nudo o tengo preguntas?',
    answer: 'Nunca estarás sola. Dentro del portal de alumnas puedes dejar tus comentarios bajo cada video, y además cuentas con acceso al Círculo Privado de Alumnas (Bono #4) donde respondemos tus dudas, revisamos fotos de tus avances y te guiamos con cariño hasta que el nudo te quede perfecto.'
  },
  {
    id: 'faq-6',
    category: 'pagos',
    question: '¿Cómo funciona la Garantía Incondicional de 7 Días?',
    answer: 'Queremos que pruebes la escuela con total paz mental. Si durante los primeros 7 días después de tu compra decides que el programa no es para ti por cualquier motivo, simplemente nos envías un correo electrónico y te reembolsamos el 100% de tu dinero de inmediato, sin preguntas incómodas y sin resentimientos. El riesgo es 100% nuestro.'
  },
  {
    id: 'faq-7',
    category: 'pagos',
    question: '¿Cuáles son los métodos de pago aceptados y es seguro?',
    answer: 'El procesamiento se realiza a través de pasarelas con encriptación militar SSL de 256 bits (como Hotmart y Stripe). Puedes pagar con Tarjeta de Crédito, Débito, PayPal, y según tu país con métodos en efectivo locales (OXXO en México, Efecty en Colombia, PagoFácil en Argentina, etc.) o transferencia bancaria en tu moneda local.'
  }
];

export const ROADMAP_STEPS: StepRoadmap[] = [
  {
    number: '01',
    title: 'Empieza con Calma',
    subtitle: 'Fundamentos, Postura & Primeros Nudos',
    description: 'Acondiciona tu espacio de bienestar. Aprende el nudo alondra, nudo plano y nudo festón con fluidez. En tus primeros 3 días completarás tu primer accesorio y sentirás el alivio inmediato de la mente.',
    keyAction: 'Proyecto: Porta-plantas bohemio & Llaveros botánicos',
    timeframe: 'Semana 1 - 2'
  },
  {
    number: '02',
    title: 'Sigue Aprendiendo',
    subtitle: 'Técnicas de Alta Costura & Estructura',
    description: 'Domina la tensión uniforme, el tejido tridimensional en círculo, la inserción de herrajes de bambú y la fórmula para peinar y fijar plumas sin que se deshagan jamás.',
    keyAction: 'Proyectos: Bolsa Santorini, Bolso Bahía & Mandala de Chakras',
    timeframe: 'Semana 3 - 5'
  },
  {
    number: '03',
    title: 'No Aprendes Sola',
    subtitle: 'Emprendimiento Consciente & Expansión',
    description: 'Aplica la calculadora de costos, aprende a tomar fotos con luz natural con tu teléfono, fija tus precios con dignidad y abre tu tienda artesanal o catálogo para deleitar a tus primeros clientes.',
    keyAction: 'Resultado: Tu catálogo oficial listo para vender y ganar dinero',
    timeframe: 'Semana 6 en adelante'
  }
];
