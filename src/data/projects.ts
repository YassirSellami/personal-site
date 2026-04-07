export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const data: Project[] = [
  {
    title: 'Rayon des arts Textile',
    subtitle: 'Brand website',
    image: '/images/projects/rayondesarts.jpg',
    date: '2020-02-01',
    desc: 'Rayon des Arts Textiles is a leader in direct embroidery marking on all types of materials, including fabrics, textiles, and leather. Personalize your items with Rayon des Arts Textiles, whether it’s a ready-to-wear collection or clothing for sports clubs or professional use. Take advantage of it and keep your unique touch everywhere!',
    tech: ['HTML', 'CSS', 'JS', 'Mobirise'],
    featured: true,
  }
];

export default data;
