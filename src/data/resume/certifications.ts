export interface Certification {
  title: string;
  number: string;
  link?: string;
  university: string;
}

const certifications: Certification[] = [
  {
    title: 'English TOEIC',
    number: '965',
    university: '',
  },
];

export default certifications;
