# Handles server-side rendering React
class FrontendController < ApplicationController
  def index
    # TODO: Why setting to true crashes?
    render component: 'Root', props: {}, prerender: false
  end
end
