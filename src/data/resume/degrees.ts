export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'EMSI',
    degree: 'Computer Science Applied to Business Management',
    link: 'https://emsi.ma/',
    year: 2018,
  },
  {
    school: 'Ibn Taymiya',
    degree: 'Scientific Preparatory Classes (CPGE), MPSI track',
    link: 'https://www.9rayti.com/ecole/cpge-marrakech',
    year: 2014,
  },
];

export default degrees;
