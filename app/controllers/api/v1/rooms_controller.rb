class Api::V1::RoomsController < ApplicationController

  def index
    if !params[:address].blank?
      rooms = Room.where(active: true).near(params[:address], 5, order: 'distance')
    else
      rooms = Room.where(active: true)
    end

    if params[:start_date].blank? && !params[:end_date].blank?
      start_date = DateTime.parse(params[:start_date])
      end_date = DateTime.parse(params[:end_date])

      # TODO Roomモデルに移動
      rooms = room.select {
        reservations = Reservation.where(
          'room_id = ? AND (start_date <= ? AND end_date >= ?) AND status = ?',
          room.id, end_date, start_date, 1
        ).count

        calendars = Calendar.where(
            "roomd_id = ? AND status = ? and day BETWEEN ? AND ?",
            room.id, 1, start_date, end_date
        ).count

        reservations.zero? && calendars.zero?
      }
    end

    render json: {
      rooms: rooms.map { |room| room.attribute.merge(image: room.cover_photo('medium'), instant: room.instant != 'Request') },
      is_success: true
    }, status: :ok
  end
end
