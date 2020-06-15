class CharactersController < ApplicationController
    skip_before_action :authorized
    def index
        characters = Character.all
        render json: CharacterSerializer.new(characters)
    end 



end 