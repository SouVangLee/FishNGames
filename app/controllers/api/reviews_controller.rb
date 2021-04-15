class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.all
    render 'api/reviews/index'
  end

  def show
    @review = Review.find_by(id: params[:id])
    render 'api/reviews/show'
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      # @reviews = Review.all
      render '/api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if !@review.nil? && @review.update(review_params)
      @reviews = Review.all
      render '/api/reviews/index'
    else
      render json @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if !@review.nil?
      @review.destroy
      @reviews = Review.all
      render '/api/reviews/index'
    else
      render json: ['Review does not exist'], status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:comment, :rating, :reviewer_id, :product_id)
  end
end
