class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render 'api/categories/show'
  end

  def show
    @category = Category.find_by(id: params[:id])
    render 'api/categories/show'
  end

  def create
    @category = Category.new(category_params)
    if @category
      render 'api/categories/show'
    end
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
