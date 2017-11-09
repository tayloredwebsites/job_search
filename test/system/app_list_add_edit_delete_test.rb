require "application_system_test_case"

class AppListAddEditDeleteTest < ApplicationSystemTestCase
  test 'Listing with add, edit, delete' do
    # Visit the index page, and confirm two rows exist
    visit root_url
    assert_equal("/", current_path)
    assert_selector 'h1'
    assert_selector 'h1', text: 'Job Search Logger'
    assert_equal(2, page.all('#jobs-table tr.row').count)

    # add a new job
    fill_in 'newRecruiter', with: 'Recruiter 3'
    fill_in 'newCompany', with: 'Company 3'
    click_button('Submit')

    # confirm updated row count
    # first, wait for new row to be added
    within('#jobs-table') do
      assert page.has_content?("Recruiter 3")
    end
    assert_equal(3, page.all('#jobs-table tr.row').count)

    # saving the id of the last Job added to database
    addedJobId = Job.last.id

    # Edit the newly added row
    # page.find("[data-test-id='#{addedJobId}'] button", text: 'Edit').click
    within("[data-test-id='#{addedJobId}']") do
      click_button('Edit')
      fill_in 'recruiter', with: 'Recruiter 3a'
      fill_in 'company', with: 'Company 3a'
      click_button('Save')
    end

    # confirm row is updated
    # first, wait for row to be updated ???
    assert page.has_css?("[data-test-id='#{addedJobId}'] td.recruiter")
    within("[data-test-id='#{addedJobId}']") do
      assert_equal("Recruiter 3a", page.find('td.recruiter').text)
      assert_equal("Company 3a", page.find('td.company').text)
    end

    # confirm we still have 3 rows
    assert_equal(3, page.all('#jobs-table tr.row').count)

    # Delete the newly added row
    # getting id by getting the last Job added to database
    within("[data-test-id='#{addedJobId}'") do
      click_button('Delete')
      # # click OK in javascript confirmation popup
      # page.driver.browser.switch_to.alert.accept
    end

    # confirm we are back to 2 rows
    assert_equal(32, page.all('#jobs-table tr.row').count)

    # reload page and confirm database matches state change displays
    visit root_url
    assert_equal("/", current_path)
    assert_equal(32, page.all('#jobs-table tr.row').count)

  end
end
