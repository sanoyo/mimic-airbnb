import { HOST } from '../constants/';

export function normalizeRooms(rooms) {
  return rooms.map(room => {
    return {
      id: room.id || '',
      title: room.listing_name || '',
      image: `${HOME}${room.image}` || '',
      homeType: room.home_type || '',
      bedRoom: room.bed_room || '',
      price: room.price || '',
      instant: room.instant || '',
    }
  })
}