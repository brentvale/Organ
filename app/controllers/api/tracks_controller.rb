class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render json: @tracks
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render json: @track
    else
      flash[:errors] = @track.errors.full_messages
      render :new
    end
  end

  def destroy
    track = Track.find(params[:id])
    track.delete
    render json: track
  end
  
  private
  
  def track_params
    params.require(:track).permit(:name, :roll)
  end

end
