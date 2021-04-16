class Api::ReviewsController < ApplicationController
  # before_action :require_logged_in, only: [:create, :update, :destroy]
  skip_before_action :verify_authenticity_token
  
  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find_by(id: params[:id])
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      # @reviews = Review.all
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if !@review.nil? && @review.update(review_params)
      render '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review
      @review.delete
    else
      render json: ['Review does not exist'], status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:comment, :rating, :reviewer_id, :product_id)
  end
end
