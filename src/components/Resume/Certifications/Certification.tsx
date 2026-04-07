import type { Certification as CertificationType } from '@/data/resume/certifications';

interface CertificationProps {
  data: CertificationType;
  key: string
}

export default function Certification({ data }: CertificationProps) {
  return (
    <li className="certification-container">
      <a href={data.link}>
        <h4 className="certification-number">{data.number}:</h4>
        <p className="certification-name">{data.title}</p>
      </a>
    </li>
  );
}
