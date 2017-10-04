# jobs_controller.rb

# class Api::V01::JobsController < Api::V01::BaseController
#   # returns Routing Error: uninitialized constant Api::V01::BaseController
class Api::V01::JobsController < ApplicationController

  respond_to :json

  def index
    respond_with Job.all
  end

  def create
    respond_with :api, :v01, Job.create(job_params)
  end

  def destroy
    respond_with Job.destroy(params[:id])
  end

  def update
    job = Job.find(params[:id])
    job.update_attributes(job_params)
    respond_with job, json: job
  end

  private

  def job_params
    params.require(:job).permit(:id, :recruiter, :company)
  end

end
