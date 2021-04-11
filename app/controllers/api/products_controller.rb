class Api::ProductsController < ApplicationController
  def index
    @products = Product.all;
    render "api/products/index"
  end

  def show
    @product = Product.find_by(id: params[:id])
    render "api/products/show"
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render "api/products/show"
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def destroy
    @product = Product.find_by(id: params[:id])
    if !@product.nil?
      deleted_product = @product.delete
      render json: deleted_product
    else
      render json: ["Invalid product!"], status: 422
    end
  end

  def update
    @product = Product.find_by(id: params[:id])
    if @product.nil?
      render json: ["Invalid product!"], status: 422
    else
      if @product.update(product_params)
        render "api/products/show"
      else
        render @product.errors.full_messages, status: 422
      end
    end
  end

  private
  def product_params
    params.require(:product).permit(:name, :price, :quantity, :description, :category_id, :photo);
  end
end
