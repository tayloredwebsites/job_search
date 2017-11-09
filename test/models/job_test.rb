require 'test_helper'

class JobTest < ActiveSupport::TestCase
  setup do
    # puts("+++ setup completed +++")
  end

  test "can create, find and delete job" do
    job = Job.create( recruiter: 'Recruiter A', company: 'Company A')
    assert_equal(0, job.errors.count)
    begin
      jobF = Job.find(job.id)
    rescue
      assert_equal('JobTest - Error finding job', 'Should not happen')
    else
      assert_equal(0, jobF.errors.count)
    end
    jobD = Job.delete( id: job.id)
    assert(jobD)
  end

end
