# Handles server-side rendering React
class FrontendController < ApplicationController
  def index
    render component: 'index', props: { name: 'Sergio' }, prerender: true
  end
end
