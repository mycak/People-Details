export const initialData = [
  {
    id: 0,
    kind: 'singleDetail',
    desc: 'Age 40+',
  },
  {
    id: 1,
    kind: 'detailTree',
    desc: 'Ethnicity',
    components: [
      {
        id: 0,
        desc: 'Black',
        kind: 'detailSubtree',
      },
      {
        id: 1,
        desc: 'Hispanic',
        kind: 'detailSubtree',
      },
    ],
  },
  {
    id: 2,
    kind: 'singleDetail',
    desc: 'Income yearly 45k USD+',
  },
];
