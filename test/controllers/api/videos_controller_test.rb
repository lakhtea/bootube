require 'test_helper'

class Api::VideosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_videos_index_url
    assert_response :success
  end

  test "should get new" do
    get api_videos_new_url
    assert_response :success
  end

  test "should get create" do
    get api_videos_create_url
    assert_response :success
  end

  test "should get patch" do
    get api_videos_patch_url
    assert_response :success
  end

  test "should get delete" do
    get api_videos_delete_url
    assert_response :success
  end

end
