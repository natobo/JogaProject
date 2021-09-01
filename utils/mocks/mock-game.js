const gamesMock = [
  {
    id: 1,
    name: 'Matsoft',
    platform: 'Play Station',
    linkImg: [
      'http://dummyimage.com/117x100.png/dddddd/000000',
      'http://dummyimage.com/206x100.png/5fa2dd/ffffff',
    ],
    type: 'ESTRATEGIA',
    users: ['apanas0', 'bmiddlemass0', 'mbus0', 'hlemerie0'],
  },
  {
    id: 2,
    name: 'Tresom',
    platform: 'Xbox',
    linkImg: [
      'http://dummyimage.com/141x100.png/ff4444/ffffff',
      'http://dummyimage.com/165x100.png/5fa2dd/ffffff',
    ],
    type: 'ACCION',
    users: ['dhessle1'],
  },
  {
    id: 3,
    name: 'Zoolab',
    platform: 'Nintendo',
    linkImg: [
      'http://dummyimage.com/204x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/172x100.png/dddddd/000000',
      'http://dummyimage.com/142x100.png/dddddd/000000',
      'http://dummyimage.com/165x100.png/cc0000/ffffff',
    ],
    type: 'ROL',
    users: ['rallmark2'],
  },
  {
    id: 4,
    name: 'Holdlamis',
    platform: 'Play Station',
    linkImg: [
      'http://dummyimage.com/213x100.png/dddddd/000000',
      'http://dummyimage.com/182x100.png/cc0000/ffffff',
      'http://dummyimage.com/206x100.png/5fa2dd/ffffff',
    ],
    type: 'DEPORTES_Y_CARRERAS',
    users: ['ekendal3', 'tcrowdace3', 'scanelas3', 'smcguirk3'],
  },
  {
    id: 5,
    name: 'Zathin',
    platform: 'Nintendo',
    linkImg: ['http://dummyimage.com/175x100.png/ff4444/ffffff'],
    type: 'AVENTURA_Y_CASUAL',
    users: ['tticksall4', 'jprowting4', 'atouhig4'],
  },
  {
    id: 6,
    name: 'Cardguard',
    platform: 'Nintendo',
    linkImg: [
      'http://dummyimage.com/125x100.png/cc0000/ffffff',
      'http://dummyimage.com/229x100.png/ff4444/ffffff',
      'http://dummyimage.com/207x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/157x100.png/cc0000/ffffff',
    ],
    type: 'ESTRATEGIA',
    users: ['tfrie5', 'lakhurst5', 'ddarkins5', 'lmuddicliffe5'],
  },
  {
    id: 7,
    name: 'Cardify',
    platform: 'Play Station',
    linkImg: [
      'http://dummyimage.com/177x100.png/dddddd/000000',
      'http://dummyimage.com/102x100.png/cc0000/ffffff',
    ],
    type: 'ESTRATEGIA',
    users: ['abruster6', 'arattenbury6', 'ctitchen6'],
  },
  {
    id: 8,
    name: 'Konklab',
    platform: 'Xbox',
    linkImg: ['http://dummyimage.com/121x100.png/cc0000/ffffff'],
    type: 'ROL',
    users: ['mlanfere7'],
  },
  {
    id: 9,
    name: 'Trippledex',
    platform: 'PC',
    linkImg: [
      'http://dummyimage.com/249x100.png/ff4444/ffffff',
      'http://dummyimage.com/105x100.png/cc0000/ffffff',
      'http://dummyimage.com/143x100.png/dddddd/000000',
      'http://dummyimage.com/207x100.png/cc0000/ffffff',
    ],
    type: 'DEPORTES_Y_CARRERAS',
    users: ['lshoebridge8', 'ghazley8', 'khucke8'],
  },
  {
    id: 10,
    name: 'Toughjoyfax',
    platform: 'Nintendo',
    linkImg: [
      'http://dummyimage.com/171x100.png/dddddd/000000',
      'http://dummyimage.com/159x100.png/dddddd/000000',
    ],
    type: 'ACCION',
    users: ['tharesnaip9'],
  },
  {
    id: 11,
    name: 'Zamit',
    platform: 'Xbox',
    linkImg: ['http://dummyimage.com/200x100.png/ff4444/ffffff'],
    type: 'AVENTURA_Y_CASUAL',
    users: ['gciccottioa', 'llebruna', 'fbolea'],
  },
  {
    id: 12,
    name: 'Fix San',
    platform: 'PC',
    linkImg: [
      'http://dummyimage.com/177x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/246x100.png/ff4444/ffffff',
    ],
    type: 'ROL',
    users: ['ntewkesberryb'],
  },
  {
    id: 13,
    name: 'Y-Solowarm',
    platform: 'Play Station',
    linkImg: [
      'http://dummyimage.com/118x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/241x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/233x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/215x100.png/5fa2dd/ffffff',
    ],
    type: 'ACCION',
    users: ['lpaddockc', 'blivelyc'],
  },
  {
    id: 14,
    name: 'Matsoft',
    platform: 'PC',
    linkImg: [
      'http://dummyimage.com/122x100.png/cc0000/ffffff',
      'http://dummyimage.com/228x100.png/cc0000/ffffff',
      'http://dummyimage.com/158x100.png/ff4444/ffffff',
      'http://dummyimage.com/202x100.png/dddddd/000000',
    ],
    type: 'ACCION',
    users: ['rshepardd', 'bvezeyd', 'msummerskilld'],
  },
  {
    id: 15,
    name: 'Flexidy',
    platform: 'Play Station',
    linkImg: [
      'http://dummyimage.com/135x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/126x100.png/5fa2dd/ffffff',
    ],
    type: 'SIMULACION',
    users: ['iantonowicze'],
  },
  {
    id: 16,
    name: 'Fix San',
    platform: 'PC',
    linkImg: [
      'http://dummyimage.com/184x100.png/dddddd/000000',
      'http://dummyimage.com/173x100.png/5fa2dd/ffffff',
    ],
    type: 'ROL',
    users: ['lskentelberyf'],
  },
  {
    id: 17,
    name: 'Sonsing',
    platform: 'PC',
    linkImg: [
      'http://dummyimage.com/109x100.png/cc0000/ffffff',
      'http://dummyimage.com/159x100.png/dddddd/000000',
    ],
    type: 'ACCION',
    users: ['bseakesg', 'bkilgrewg', 'dcaveg', 'skonertg'],
  },
  {
    id: 18,
    name: 'Sonsing',
    platform: 'Xbox',
    linkImg: [
      'http://dummyimage.com/144x100.png/dddddd/000000',
      'http://dummyimage.com/202x100.png/ff4444/ffffff',
      'http://dummyimage.com/125x100.png/dddddd/000000',
    ],
    type: 'ESTRATEGIA',
    users: ['gsmalemanh', 'sonealh', 'hlegisterh', 'mbahiah'],
  },
  {
    id: 19,
    name: 'Gembucket',
    platform: 'Xbox',
    linkImg: [
      'http://dummyimage.com/213x100.png/5fa2dd/ffffff',
      'http://dummyimage.com/238x100.png/ff4444/ffffff',
    ],
    type: 'DEPORTES_Y_CARRERAS',
    users: ['edumphyi', 'ccuttlei', 'btinkleri'],
  },
  {
    id: 20,
    name: 'Bitchip',
    platform: 'Nintendo',
    linkImg: ['http://dummyimage.com/127x100.png/dddddd/000000'],
    type: 'SIMULACION',
    users: ['kjanderaj', 'smonahanj'],
  },
];

module.exports = { gamesMock };
