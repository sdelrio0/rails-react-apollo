# Handles server-side rendering React
class FrontendController < ApplicationController
  def index
    render component: 'index', props: {}, prerender: false # TODO: Why setting to true crashes?
  end
end
