class RoomSerializer < ActiveModel::Serializer
  attribute :id, :listing_name, :address, :home_type,
            :bed_room, :bath_room, :summary, :price,
            :price, :active, :image, :unavailable_dates

  def unavailable_dates
    @instance_options[:unavailable_dates]
  end

  def image
    @instance_options[:image]
  end
  
  # Roomのjsonにuserの情報が含まれるのでここで定義
  class UserSerializer < ActiveModel::Serializer
    attributes :email, :fullname, :image
  end

  belongs_to :user, serializer: UserSerializer, key: :host
end
