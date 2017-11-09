# jobs_controller.rb

# class Api::V01::JobsController < Api::V01::BaseController
#   # returns Routing Error: uninitialized constant Api::V01::BaseController
class Api::V01::JobsController < ApplicationController

  # automatically respond to json using the responders gem.
  respond_to :json

  # Job listing - app/javascript/components/job_listing.jsx
  def index
    # respond_with :api, :v01, Job.all
    jobs = Job.all
    render :json => jobs.to_json, status: 200
  end

  # Create Job - app/javascript/components/new_job.jsx
  # todo - handle errors in front end
  def create
    # respond_with :api, :v01, Job.create(job_params)
    job = Job.create(job_params)
    # no error checks, so simply return
    render :json => job.to_json
  end

  # Delete Job - app/javascript/components/body.jsx
  def destroy
    begin
      job = Job.destroy(params[:id])
    rescue StandardError => e
      # capture exception on destroy
      render :json => { :errors => e.message }, status: 422
    else
      # if not error not rescued (if job is returned as frozen/true), return 200 (OK with data)
      # else error return 422 - Unprocessable Entity
      # note HTTP destroy does not return data
      render :json => {}, status: (job ? 204 : 422)
    end
  end

  # Edit/Update Job - app/javascript/components/job.jsx
  def update
    begin
      job = Job.find(params[:id])
      job.update_attributes(job_params)
    rescue StandardError => e
      # capture exception on update
      render :json => { :errors => e.message }, status: 422
    else
      # if no exception on update, return status based upon error count
      # note HTTP put does not return data
      # to do - return errors to user interface
      render :json => {}, status: (job.errors.count == 0 ? 204 : 422)
    end
  end

  private

  def job_params
    params.require(:job).permit(:id, :recruiter, :company)
  end

end
