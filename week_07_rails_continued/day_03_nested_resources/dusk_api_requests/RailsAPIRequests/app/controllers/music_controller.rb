class MusicController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:curlMe]

  def index
  end

  def search
    request = Typhoeus::Request.new(
      "https://itunes.apple.com/search",
      params: {term: params[:music]}
    )
    res = request.run
    res_body = res.options[:response_body]
    res_obj = JSON.parse(res_body)
    @first_song_preview = res_obj["results"][0]["previewUrl"]
  end

  def curlme
    binding.pry
  end

end