class ApplicationController < ActionController::API
    #do i need to change actioncontroller to ActionController::Base ?
    
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection

    protect_from_forgery with: :exception

end
