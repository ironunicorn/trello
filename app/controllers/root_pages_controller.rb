class RootPagesController < ApplicationController
  before_action :check_login

  def root
  end

  private

  def check_login
    redirect_to new_session_url unless current_user
  end
end
