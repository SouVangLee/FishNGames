class Api::CartItemsController < ApplicationController
  def index
    if current_user
      @cart_items = CartItem.all.select { |cart_item| cart_item.user_id == current_user.id }
      render "api/cart_items/index"
    else
      return nil
    end
  end

  def create
    cart_items = CartItem.all.select { |cart_item| cart_item.user_id == current_user.id }
    @cart_item = CartItem.new(cart_item_params)
    if current_user && cart_items.any? { |item| @cart_item.product_id == item.product_id }
      product_ids = {}
      cart_items.each do |cart_item|
        product_ids[cart_item.product_id] = cart_item.id
      end
      new_quantity = @cart_item.quantity + @existing_item.quantity
      @existing_item = CartItem.find_by(id: product_ids[@cart_item.product_id])
      if @existing_item && @existing_item.update(
        user_id: @existing_item.user_id, 
        product_id: @existing_item.product_id,
        quantity: new_quantity
      )
        @cart_items = CartItem.all.select { |cart_item| cart_item.user_id == current_user.id }
        render "api/cart_items/index"
      else
        render json @existing_item.errors.full_messages, status: 422
      end
    else
      if current_user && @cart_item.save
        @cart_items = CartItem.all.select { |cart_item| cart_item.user_id == current_user.id }
        render "api/cart_items/index"
      else
        render json @cart_item.errors.full_messages, status: 422
      end
    end
  end

  def update
    if current_user
      @cart_item = CartItem.find_by(id: params[:id])
      if @cart_item && @cart_item.update(cart_item_params)
        @cart_items = CartItem.all.select { |cart_item| cart_item.user_id == current_user.id }
        render "api/cart_items/index"
      else
        render json @cart_item.errors.full_messages, status: 422
      end
    else
      render json: ["You must be signed in!"], status: 404
    end
  end

  def destroy
    if current_user
      @cart_item = CartItem.find_by(id: params[:id])
      if @cart_item && @cart_item.delete
        @cart_items = CartItem.all.select { |cart_item| cart_item.user_id == current_user.id }
        render "api/cart_items/index"
      else
        render json ["This item is no longer available!"], status: 422
      end
    else
      render json: ["You must be signed in!"], status: 404
    end
  end


  private
  def cart_item_params
    params.require(:cartItem).permit(:user_id, :product_id, :quantity)
  end
end
