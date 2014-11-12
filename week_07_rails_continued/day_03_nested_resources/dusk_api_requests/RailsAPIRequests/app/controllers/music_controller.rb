class MusicController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:test]

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

  def curlMe
    binding.pry
  end

end