const initialState = {
  rooms: [
    {
      id: 1,
      title: 'New York',
      homeType: 'House',
      image: { uri: 'https://design-1st.jp/wp/wp-content/uploads/2018/11/3f8a2c548c51c116fcc79d650c98dd161-e1543190476505.jpg' },
      bedRoom: 2,
      price: 150,
      instant: true
    },
    {
      id: 2,
      title: 'Paris',
      homeType: 'House',
      image: { uri: 'http://livedoor.blogimg.jp/tsukasahome-8343/imgs/6/0/605108d0.jpg' },
      bedRoom: 1,
      price: 99,
      instant: false
    },
    {
      id: 3,
      title: 'Melbourne',
      homeType: 'Apartment',
      image: { uri: 'https://p.limia.jp/resize/o3/image/435/gallery/25266/a2afc58c5ac9c65a661b3c1daeeb7631.jpg' },
      bedRoom: 1,
      price: 99,
      instant: false
    },
  ]
}

export default function(state = initialState, action) {
  return state;
}
