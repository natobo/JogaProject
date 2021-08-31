const partiesMock = [
  {
    id: 1,
    idJitsiMeet: 'https://bing.com/ligula.jsp?odio=in&porttitor=leo',
  },
  {
    id: 2,
    idJitsiMeet:
      'http://topsy.com/nulla/elit/ac/nulla.png?nisl=aliquam&duis=augue&ac=quam&nibh=sollicitudin&fusce=vitae&lacus=consectetuer&purus=eget&aliquet=rutrum&at=at&feugiat=lorem&non=integer&pretium=tincidunt&quis=ante&lectus=vel&suspendisse=ipsum&potenti=praesent&in=blandit&eleifend=lacinia&quam=erat&a=vestibulum&odio=sed&in=magna&hac=at',
  },
  {
    id: 3,
    idJitsiMeet:
      'https://comcast.net/vestibulum/quam/sapien/varius/ut/blandit.jsp?aliquam=ante&convallis=vivamus&nunc=tortor&proin=duis&at=mattis&turpis=egestas&a=metus&pede=aenean&posuere=fermentum&nonummy=donec&integer=ut&non=mauris&velit=eget&donec=massa&diam=tempor&neque=convallis&vestibulum=nulla&eget=neque&vulputate=libero&ut=convallis&ultrices=eget&vel=eleifend&augue=luctus&vestibulum=ultricies&ante=eu&ipsum=nibh&primis=quisque&in=id&faucibus=justo&orci=sit&luctus=amet&et=sapien&ultrices=dignissim&posuere=vestibulum&cubilia=vestibulum&curae=ante&donec=ipsum&pharetra=primis&magna=in&vestibulum=faucibus&aliquet=orci&ultrices=luctus&erat=et&tortor=ultrices&sollicitudin=posuere&mi=cubilia&sit=curae&amet=nulla&lobortis=dapibus&sapien=dolor',
  },
  {
    id: 4,
    idJitsiMeet:
      'http://psu.edu/fermentum/justo/nec/condimentum/neque/sapien.html?amet=ut&cursus=erat&id=curabitur&turpis=gravida&integer=nisi&aliquet=at&massa=nibh&id=in&lobortis=hac&convallis=habitasse&tortor=platea&risus=dictumst&dapibus=aliquam&augue=augue&vel=quam&accumsan=sollicitudin&tellus=vitae&nisi=consectetuer&eu=eget&orci=rutrum&mauris=at&lacinia=lorem&sapien=integer&quis=tincidunt&libero=ante&nullam=vel&sit=ipsum&amet=praesent&turpis=blandit&elementum=lacinia&ligula=erat&vehicula=vestibulum&consequat=sed&morbi=magna&a=at&ipsum=nunc&integer=commodo&a=placerat&nibh=praesent&in=blandit&quis=nam&justo=nulla&maecenas=integer&rhoncus=pede&aliquam=justo&lacus=lacinia&morbi=eget&quis=tincidunt&tortor=eget&id=tempus&nulla=vel&ultrices=pede&aliquet=morbi&maecenas=porttitor&leo=lorem&odio=id&condimentum=ligula&id=suspendisse&luctus=ornare&nec=consequat',
  },
  {
    id: 5,
    idJitsiMeet:
      'https://nih.gov/blandit/nam.js?sit=eu&amet=interdum&eros=eu&suspendisse=tincidunt&accumsan=in&tortor=leo&quis=maecenas&turpis=pulvinar&sed=lobortis&ante=est&vivamus=phasellus&tortor=sit&duis=amet&mattis=erat&egestas=nulla&metus=tempus&aenean=vivamus&fermentum=in&donec=felis&ut=eu&mauris=sapien&eget=cursus&massa=vestibulum&tempor=proin&convallis=eu&nulla=mi&neque=nulla&libero=ac&convallis=enim&eget=in&eleifend=tempor&luctus=turpis&ultricies=nec&eu=euismod&nibh=scelerisque&quisque=quam&id=turpis&justo=adipiscing&sit=lorem&amet=vitae&sapien=mattis&dignissim=nibh&vestibulum=ligula&vestibulum=nec&ante=sem&ipsum=duis&primis=aliquam&in=convallis&faucibus=nunc&orci=proin&luctus=at&et=turpis&ultrices=a&posuere=pede&cubilia=posuere&curae=nonummy&nulla=integer&dapibus=non&dolor=velit&vel=donec&est=diam&donec=neque&odio=vestibulum&justo=eget&sollicitudin=vulputate&ut=ut&suscipit=ultrices&a=vel&feugiat=augue&et=vestibulum&eros=ante&vestibulum=ipsum&ac=primis&est=in&lacinia=faucibus&nisi=orci&venenatis=luctus&tristique=et&fusce=ultrices&congue=posuere&diam=cubilia&id=curae&ornare=donec&imperdiet=pharetra&sapien=magna&urna=vestibulum&pretium=aliquet&nisl=ultrices&ut=erat&volutpat=tortor&sapien=sollicitudin&arcu=mi&sed=sit&augue=amet&aliquam=lobortis&erat=sapien&volutpat=sapien&in=non',
  },
  {
    id: 6,
    idJitsiMeet:
      'http://harvard.edu/velit/id/pretium/iaculis/diam/erat/fermentum.xml?sapien=mus&cum=vivamus&sociis=vestibulum&natoque=sagittis&penatibus=sapien&et=cum&magnis=sociis&dis=natoque&parturient=penatibus&montes=et&nascetur=magnis&ridiculus=dis&mus=parturient&etiam=montes&vel=nascetur&augue=ridiculus&vestibulum=mus&rutrum=etiam&rutrum=vel&neque=augue&aenean=vestibulum&auctor=rutrum&gravida=rutrum&sem=neque&praesent=aenean&id=auctor&massa=gravida&id=sem&nisl=praesent&venenatis=id&lacinia=massa&aenean=id&sit=nisl&amet=venenatis&justo=lacinia&morbi=aenean&ut=sit&odio=amet&cras=justo&mi=morbi&pede=ut&malesuada=odio&in=cras&imperdiet=mi&et=pede&commodo=malesuada&vulputate=in&justo=imperdiet&in=et&blandit=commodo&ultrices=vulputate&enim=justo&lorem=in&ipsum=blandit&dolor=ultrices&sit=enim&amet=lorem&consectetuer=ipsum&adipiscing=dolor&elit=sit&proin=amet&interdum=consectetuer&mauris=adipiscing&non=elit&ligula=proin&pellentesque=interdum&ultrices=mauris&phasellus=non&id=ligula&sapien=pellentesque&in=ultrices&sapien=phasellus&iaculis=id&congue=sapien&vivamus=in&metus=sapien&arcu=iaculis',
  },
  {
    id: 7,
    idJitsiMeet:
      'http://unicef.org/odio/consequat/varius.jsp?lobortis=a&convallis=nibh&tortor=in&risus=quis&dapibus=justo&augue=maecenas&vel=rhoncus&accumsan=aliquam&tellus=lacus&nisi=morbi&eu=quis&orci=tortor&mauris=id&lacinia=nulla&sapien=ultrices&quis=aliquet&libero=maecenas&nullam=leo&sit=odio&amet=condimentum&turpis=id&elementum=luctus&ligula=nec&vehicula=molestie&consequat=sed&morbi=justo&a=pellentesque&ipsum=viverra&integer=pede&a=ac&nibh=diam&in=cras&quis=pellentesque&justo=volutpat&maecenas=dui&rhoncus=maecenas&aliquam=tristique&lacus=est&morbi=et&quis=tempus&tortor=semper',
  },
  {
    id: 8,
    idJitsiMeet:
      'https://wordpress.com/volutpat/in/congue/etiam/justo/etiam.jpg?laoreet=id&ut=pretium&rhoncus=iaculis&aliquet=diam&pulvinar=erat&sed=fermentum&nisl=justo&nunc=nec&rhoncus=condimentum&dui=neque&vel=sapien&sem=placerat&sed=ante&sagittis=nulla&nam=justo&congue=aliquam&risus=quis&semper=turpis&porta=eget&volutpat=elit&quam=sodales&pede=scelerisque&lobortis=mauris&ligula=sit&sit=amet&amet=eros&eleifend=suspendisse',
  },
  {
    id: 9,
    idJitsiMeet:
      'https://networkadvertising.org/id.json?mi=ultrices&in=erat&porttitor=tortor&pede=sollicitudin&justo=mi&eu=sit&massa=amet&donec=lobortis&dapibus=sapien&duis=sapien&at=non&velit=mi&eu=integer&est=ac&congue=neque&elementum=duis&in=bibendum&hac=morbi&habitasse=non&platea=quam&dictumst=nec&morbi=dui&vestibulum=luctus&velit=rutrum&id=nulla&pretium=tellus&iaculis=in&diam=sagittis&erat=dui&fermentum=vel&justo=nisl&nec=duis&condimentum=ac&neque=nibh&sapien=fusce&placerat=lacus&ante=purus&nulla=aliquet&justo=at&aliquam=feugiat&quis=non&turpis=pretium&eget=quis&elit=lectus&sodales=suspendisse&scelerisque=potenti&mauris=in&sit=eleifend&amet=quam&eros=a&suspendisse=odio&accumsan=in&tortor=hac&quis=habitasse&turpis=platea&sed=dictumst&ante=maecenas&vivamus=ut&tortor=massa&duis=quis&mattis=augue&egestas=luctus&metus=tincidunt&aenean=nulla&fermentum=mollis&donec=molestie&ut=lorem&mauris=quisque&eget=ut&massa=erat&tempor=curabitur&convallis=gravida&nulla=nisi&neque=at&libero=nibh&convallis=in&eget=hac&eleifend=habitasse&luctus=platea&ultricies=dictumst&eu=aliquam&nibh=augue&quisque=quam&id=sollicitudin&justo=vitae&sit=consectetuer&amet=eget&sapien=rutrum&dignissim=at&vestibulum=lorem&vestibulum=integer&ante=tincidunt&ipsum=ante&primis=vel&in=ipsum&faucibus=praesent',
  },
  {
    id: 10,
    idJitsiMeet:
      'https://bloglovin.com/vel/nulla/eget.html?posuere=proin&cubilia=interdum&curae=mauris&mauris=non&viverra=ligula&diam=pellentesque',
  },
  {
    id: 11,
    idJitsiMeet:
      'http://blogs.com/sit/amet/eleifend/pede/libero/quis.xml?massa=suspendisse&tempor=potenti&convallis=nullam&nulla=porttitor&neque=lacus&libero=at&convallis=turpis&eget=donec&eleifend=posuere&luctus=metus&ultricies=vitae&eu=ipsum&nibh=aliquam&quisque=non&id=mauris&justo=morbi&sit=non&amet=lectus&sapien=aliquam&dignissim=sit&vestibulum=amet&vestibulum=diam&ante=in&ipsum=magna&primis=bibendum&in=imperdiet&faucibus=nullam&orci=orci&luctus=pede&et=venenatis&ultrices=non&posuere=sodales&cubilia=sed&curae=tincidunt&nulla=eu&dapibus=felis&dolor=fusce&vel=posuere&est=felis&donec=sed&odio=lacus&justo=morbi&sollicitudin=sem&ut=mauris&suscipit=laoreet&a=ut&feugiat=rhoncus&et=aliquet&eros=pulvinar&vestibulum=sed&ac=nisl&est=nunc&lacinia=rhoncus&nisi=dui&venenatis=vel&tristique=sem&fusce=sed&congue=sagittis&diam=nam&id=congue&ornare=risus',
  },
  {
    id: 12,
    idJitsiMeet:
      'https://51.la/purus/aliquet/at.png?tortor=curabitur&sollicitudin=at&mi=ipsum&sit=ac&amet=tellus&lobortis=semper&sapien=interdum&sapien=mauris&non=ullamcorper&mi=purus',
  },
  {
    id: 13,
    idJitsiMeet:
      'http://umich.edu/massa/quis/augue/luctus.html?accumsan=imperdiet&tellus=nullam&nisi=orci&eu=pede&orci=venenatis&mauris=non&lacinia=sodales&sapien=sed&quis=tincidunt&libero=eu&nullam=felis&sit=fusce&amet=posuere&turpis=felis&elementum=sed&ligula=lacus&vehicula=morbi&consequat=sem&morbi=mauris&a=laoreet&ipsum=ut&integer=rhoncus&a=aliquet&nibh=pulvinar&in=sed&quis=nisl&justo=nunc&maecenas=rhoncus&rhoncus=dui&aliquam=vel&lacus=sem&morbi=sed&quis=sagittis&tortor=nam&id=congue&nulla=risus&ultrices=semper&aliquet=porta&maecenas=volutpat&leo=quam&odio=pede&condimentum=lobortis&id=ligula&luctus=sit&nec=amet&molestie=eleifend&sed=pede&justo=libero&pellentesque=quis&viverra=orci&pede=nullam&ac=molestie&diam=nibh&cras=in&pellentesque=lectus&volutpat=pellentesque&dui=at&maecenas=nulla&tristique=suspendisse&est=potenti&et=cras&tempus=in&semper=purus&est=eu&quam=magna&pharetra=vulputate&magna=luctus&ac=cum&consequat=sociis&metus=natoque&sapien=penatibus&ut=et&nunc=magnis&vestibulum=dis&ante=parturient&ipsum=montes&primis=nascetur&in=ridiculus',
  },
  {
    id: 14,
    idJitsiMeet:
      'http://so-net.ne.jp/proin.html?orci=id&luctus=luctus&et=nec&ultrices=molestie&posuere=sed&cubilia=justo&curae=pellentesque&donec=viverra&pharetra=pede&magna=ac&vestibulum=diam&aliquet=cras&ultrices=pellentesque&erat=volutpat&tortor=dui&sollicitudin=maecenas&mi=tristique&sit=est&amet=et&lobortis=tempus&sapien=semper&sapien=est&non=quam&mi=pharetra&integer=magna&ac=ac&neque=consequat&duis=metus&bibendum=sapien&morbi=ut&non=nunc&quam=vestibulum&nec=ante&dui=ipsum&luctus=primis&rutrum=in&nulla=faucibus&tellus=orci&in=luctus&sagittis=et&dui=ultrices&vel=posuere&nisl=cubilia&duis=curae&ac=mauris&nibh=viverra&fusce=diam&lacus=vitae&purus=quam&aliquet=suspendisse&at=potenti&feugiat=nullam&non=porttitor&pretium=lacus&quis=at&lectus=turpis&suspendisse=donec&potenti=posuere&in=metus&eleifend=vitae&quam=ipsum&a=aliquam&odio=non&in=mauris&hac=morbi&habitasse=non&platea=lectus&dictumst=aliquam&maecenas=sit&ut=amet&massa=diam&quis=in&augue=magna&luctus=bibendum&tincidunt=imperdiet&nulla=nullam&mollis=orci',
  },
  {
    id: 15,
    idJitsiMeet:
      'https://tamu.edu/nulla/quisque/arcu.jpg?vel=in&pede=faucibus&morbi=orci&porttitor=luctus&lorem=et&id=ultrices&ligula=posuere&suspendisse=cubilia&ornare=curae&consequat=nulla&lectus=dapibus&in=dolor&est=vel&risus=est&auctor=donec&sed=odio&tristique=justo&in=sollicitudin&tempus=ut&sit=suscipit&amet=a&sem=feugiat&fusce=et&consequat=eros&nulla=vestibulum&nisl=ac&nunc=est',
  },
  {
    id: 16,
    idJitsiMeet:
      'https://weebly.com/aliquet/ultrices/erat/tortor.html?neque=fusce&vestibulum=posuere&eget=felis&vulputate=sed&ut=lacus&ultrices=morbi&vel=sem&augue=mauris&vestibulum=laoreet&ante=ut&ipsum=rhoncus',
  },
  {
    id: 17,
    idJitsiMeet:
      'http://ocn.ne.jp/eget/tincidunt.xml?vehicula=aenean&consequat=lectus&morbi=pellentesque&a=eget&ipsum=nunc&integer=donec&a=quis&nibh=orci&in=eget&quis=orci&justo=vehicula&maecenas=condimentum&rhoncus=curabitur&aliquam=in&lacus=libero&morbi=ut&quis=massa&tortor=volutpat&id=convallis&nulla=morbi&ultrices=odio&aliquet=odio&maecenas=elementum&leo=eu&odio=interdum&condimentum=eu&id=tincidunt&luctus=in&nec=leo&molestie=maecenas&sed=pulvinar&justo=lobortis&pellentesque=est&viverra=phasellus&pede=sit&ac=amet&diam=erat&cras=nulla&pellentesque=tempus&volutpat=vivamus&dui=in&maecenas=felis&tristique=eu&est=sapien&et=cursus&tempus=vestibulum&semper=proin&est=eu&quam=mi&pharetra=nulla&magna=ac&ac=enim&consequat=in&metus=tempor&sapien=turpis&ut=nec&nunc=euismod&vestibulum=scelerisque&ante=quam&ipsum=turpis&primis=adipiscing&in=lorem&faucibus=vitae&orci=mattis&luctus=nibh&et=ligula&ultrices=nec&posuere=sem&cubilia=duis&curae=aliquam&mauris=convallis&viverra=nunc&diam=proin&vitae=at&quam=turpis&suspendisse=a&potenti=pede&nullam=posuere&porttitor=nonummy&lacus=integer',
  },
  {
    id: 18,
    idJitsiMeet:
      'http://time.com/ut/odio/cras/mi/pede/malesuada.jsp?metus=nisi&aenean=venenatis&fermentum=tristique&donec=fusce&ut=congue&mauris=diam&eget=id&massa=ornare&tempor=imperdiet&convallis=sapien&nulla=urna&neque=pretium&libero=nisl&convallis=ut&eget=volutpat&eleifend=sapien&luctus=arcu&ultricies=sed&eu=augue&nibh=aliquam&quisque=erat&id=volutpat&justo=in&sit=congue&amet=etiam&sapien=justo&dignissim=etiam&vestibulum=pretium&vestibulum=iaculis&ante=justo&ipsum=in&primis=hac&in=habitasse&faucibus=platea&orci=dictumst&luctus=etiam&et=faucibus&ultrices=cursus&posuere=urna&cubilia=ut&curae=tellus',
  },
  {
    id: 19,
    idJitsiMeet:
      'http://mapy.cz/mollis.aspx?luctus=metus&ultricies=sapien&eu=ut&nibh=nunc&quisque=vestibulum&id=ante&justo=ipsum&sit=primis&amet=in',
  },
  {
    id: 20,
    idJitsiMeet:
      'http://examiner.com/in/felis/donec/semper/sapien/a.js?justo=pellentesque&lacinia=at&eget=nulla&tincidunt=suspendisse&eget=potenti&tempus=cras&vel=in&pede=purus&morbi=eu&porttitor=magna&lorem=vulputate&id=luctus&ligula=cum&suspendisse=sociis&ornare=natoque&consequat=penatibus&lectus=et',
  },
];

module.exports = { partiesMock };
