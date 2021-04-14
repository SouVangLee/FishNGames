class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.all
    render 'api/reviews/index'
  end

  def create
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id
    if @review.save
      render '/api/reviews/index'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if !@review.nil? && @review.update(review_params)
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if !@review.nil?
      @review.destroy
      render '/api/reviews/index'
    else
      render json: ['Review does not exist'], status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :reviewer_id, :product_id)
  end
end
