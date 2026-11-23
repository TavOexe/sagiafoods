// Datos de la empresa: cámbialos aquí y se actualizan en toda la web (contenido, SEO y datos estructurados).
export const site = {
  name: 'SagiaFoods Perú',
  url: 'https://sagiafoods.pe',
  title: 'SagiaFoods Perú | Ensaladas y hortalizas frescas empacadas del Valle de Lurín',
  description:
    'Ensaladas, hojas verdes y hortalizas frescas del Valle de Lurín: lavadas, cortadas y empacadas en Lima. Con agua de fuente propia y libres de pesticidas. Escríbenos.',
  email: 'sagia@sagiafoods.com',
  phone: '+51 955 260 181',
  phoneHref: 'tel:+51955260181',
  address: {
    street: 'Av. 7 de Junio 534, Nueva Esperanza',
    district: 'Villa María del Triunfo',
    city: 'Lima',
    country: 'PE',
    full: 'Av. 7 de Junio 534, Nueva Esperanza, Villa María del Triunfo, Lima, Perú',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+7+de+Junio+534+Nueva+Esperanza+Villa+Maria+del+Triunfo+Lima',
  // Agrega aquí las URLs reales de redes sociales; solo se muestran las que tengan URL.
  social: [] as { name: string; url: string }[],
  // Formulario de contacto. Sin endpoint, el botón abre el correo del visitante con el mensaje ya escrito.
  // Con un servicio como Web3Forms o Formspree: define PUBLIC_FORM_ENDPOINT (y PUBLIC_FORM_ACCESS_KEY si
  // el servicio la pide) en un archivo .env o en el workflow de GitHub Actions.
  form: {
    endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
    accessKey: import.meta.env.PUBLIC_FORM_ACCESS_KEY ?? '',
  },
};

// Afirmaciones tomadas de las etiquetas de los productos.
export const sellos = [
  'Cultivado en el Valle de Lurín',
  'Agua de fuente propia',
  'Libre de pesticidas',
  'Envase 100% reciclable',
];
