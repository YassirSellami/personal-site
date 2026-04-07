import type { Language as LanguageType } from '@/data/resume/languages';

interface LanguageProps {
  data: LanguageType;
  key: string;
}

export default function Language({ data }: LanguageProps) {
  return (
    <li className="language-container">
      <h4 className="language-name">{data.title}</h4>
      <p className="language-proficiency">{data.proficiency}</p>
    </li>
  );
}
