import { StatData } from '../../components/Stats/types';
import dayjs from 'dayjs';

const data: StatData[] = [
  {
    label: 'Number of visits',
    key: 'visits',
    value: 'Many times',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {
    label: 'Original work by',
    key: 'designedBy',
    link: 'https://github.com/mldangelo/personal-site/',
    value: 'mldangelo'
  },
];

export default data;
