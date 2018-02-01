# Handles server-side rendering React
class FrontendController < ApplicationController
  def index
    # TODO: Why setting to true crashes?
    render component: 'index', props: {}, prerender: false
  end
end
