import type { ImageMetadata } from 'astro';

export type Categoria = 'Ensaladas' | 'Hojas verdes' | 'Hortalizas';

export interface Producto {
  /** También es el nombre del archivo de la foto: src/assets/images/productos/<slug>.(png|jpg|jpeg|webp|avif) */
  slug: string;
  nombre: string;
  /** Nombre comercial secundario que aparece en la etiqueta. */
  linea: string;
  categoria: Categoria;
  descripcion: string;
  caracteristicas: string[];
  /** Color característico de la etiqueta (fondo de la card). */
  color: string;
  /** Color del texto sobre ese fondo (ya validado para contraste AA). */
  tinta: 'clara' | 'oscura';
}

// Catálogo tomado de las etiquetas de los empaques.
export const productos: Producto[] = [
  {
    slug: 'complete-mix-salad',
    nombre: 'Complete Mix Salad',
    linea: 'Fresca y saludable',
    categoria: 'Ensaladas',
    descripcion: 'Mezcla de lechugas verdes y moradas con hojas de espinaca y arúgula.',
    caracteristicas: ['Lechugas verdes y moradas', 'Hojas de espinaca y arúgula', 'Lista para servir'],
    color: '#1c7aa6',
    tinta: 'clara',
  },
  {
    slug: 'spring-mix-salad',
    nombre: 'Spring Mix Salad',
    linea: 'Fresca y tierna',
    categoria: 'Ensaladas',
    descripcion: 'Mezcla primaveral de lechugas verdes y moradas.',
    caracteristicas: ['Mezcla primaveral', 'Lechugas verdes y moradas', 'Lista para servir'],
    color: '#237a49',
    tinta: 'clara',
  },
  {
    slug: 'fortified-roman-salad',
    nombre: 'Fortified Roman Salad',
    linea: 'Fresca y poderosa',
    categoria: 'Ensaladas',
    descripcion: 'Mezcla única de lechuga romana con hojas de espinaca y arúgula.',
    caracteristicas: ['Lechuga romana', 'Hojas de espinaca y arúgula', 'Lista para servir'],
    color: '#f2c230',
    tinta: 'oscura',
  },
  {
    slug: 'espinaca',
    nombre: 'Espinaca',
    linea: 'Iron rich food',
    categoria: 'Hojas verdes',
    descripcion: 'Superalimento bajo en calorías.',
    caracteristicas: ['Fuente de hierro', 'Vitaminas y minerales', 'Bajo en calorías'],
    color: '#93552f',
    tinta: 'clara',
  },
  {
    slug: 'lechuga-crespa',
    nombre: 'Lechuga Crespa',
    linea: 'Green fitness lettuce',
    categoria: 'Hojas verdes',
    descripcion: 'Lechuga crespa entera, fresca y crocante.',
    caracteristicas: ['Planta entera', 'Hojas crespas', 'Empacada fresca'],
    color: '#0f6b55',
    tinta: 'clara',
  },
  {
    slug: 'lechuga-romana',
    nombre: 'Lechuga Romana',
    linea: 'Roman fitness lettuce',
    categoria: 'Hojas verdes',
    descripcion: 'Hojas de lechuga romana seleccionadas y empacadas.',
    caracteristicas: ['Hojas seleccionadas', 'Textura firme', 'Empacada fresca'],
    color: '#c9db3f',
    tinta: 'oscura',
  },
  {
    slug: 'tomate-cherry',
    nombre: 'Tomate Cherry',
    linea: 'Cerasi',
    categoria: 'Hortalizas',
    descripcion: 'Tomates cherry seleccionados, presentados en bandeja.',
    caracteristicas: ['Rico en licopeno', 'Antioxidante natural', 'Presentación en bandeja'],
    color: '#cf2f25',
    tinta: 'clara',
  },
  {
    slug: 'pepino-holandes',
    nombre: 'Pepino Holandés',
    linea: 'Haarlem',
    categoria: 'Hortalizas',
    descripcion: 'Pepino holandés entero, empacado de forma individual.',
    caracteristicas: ['Variedad Haarlem', 'Pieza entera', 'Empacado individual'],
    color: '#21473a',
    tinta: 'clara',
  },
  {
    slug: 'papa-cocktail',
    nombre: 'Papa Cocktail',
    linea: 'Blanca',
    categoria: 'Hortalizas',
    descripcion: 'Papas cocktail blancas seleccionadas.',
    caracteristicas: ['Papa blanca', 'Tamaño cocktail', 'Presentación en malla'],
    color: '#b8873f',
    tinta: 'oscura',
  },
];

// Busca automáticamente la foto de cada producto por su slug.
const fotos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/images/productos/*.{png,jpg,jpeg,webp,avif}',
  { eager: true },
);

export function fotoDe(slug: string): ImageMetadata | undefined {
  const entrada = Object.entries(fotos).find(
    ([ruta]) => ruta.split('/').pop()?.replace(/\.[^.]+$/, '') === slug,
  );
  return entrada?.[1].default;
}
