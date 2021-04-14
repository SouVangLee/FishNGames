class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.with_attached_photos.all 
    render 'api/categories/index'
  end

  def show
    @category = Category.find_by(id: params[:id])
    render 'api/categories/show'
  end

  # def create
  #   @category = Category.new(category_params)
  #   if @category.save
  #     render 'api/categories/show'
  #   else
  #     render json: @category.errors.full_messages, status: 422
  #   end
  # end

  # def destroy
  #   @category = Category.find_by(id: params[:id])
  #   if !@category.nil?
  #     deleted_category = @category.delete
  #     render json: deleted_category
  #   else
  #     render json: ["Invalid category!"], status: 422
  #   end
  # end

  private
  def category_params
    params.require(:category).permit(:name, photos: [])
  end
end
