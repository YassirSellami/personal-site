import type { Certification as CertificationType } from '@/data/resume/certifications';
import Certification from '@/components/Resume/Certifications/Certification';


interface CertificationsProps {
  data: CertificationType[];
}

function getRows(certifications: CertificationType[]) {
  return certifications
    .sort((a, b) => {
      let ret = 0;
      if (a.university > b.university) ret = -1;
      else if (a.university < b.university) ret = 1;
      else if (a.number > b.number) ret = 1;
      else if (a.number < b.number) ret = -1;
      return ret;
    })
    .map((certification) => <Certification data={certification} key={certification.title} />);
}

export default function Certifications({ data }: CertificationsProps) {
  return (
    <div className="certifications">
      <div className="link-to" id="certifications" />
      <div className="title">
        <h3>Certifications</h3>
      </div>
      <ul className="certification-list">{getRows(data)}</ul>
    </div>
  );
}
