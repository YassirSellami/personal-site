import type { Language as LanguageType } from '@/data/resume/languages';
import Language from '@/components/Resume/Languages/Language';


interface LanguagesProps {
  data: LanguageType[];
}

function getRows(languages: LanguageType[]) {
  return languages
    .map((language) => <Language data={language} key={language.title} />);
}

export default function Languages({ data }: LanguagesProps) {
  return (
    <div className="languages">
      <div className="link-to" id="languages" />
      <div className="title">
        <h3>Languages</h3>
      </div>
      <ul className="language-list">{getRows(data)}</ul>
    </div>
  );
}
