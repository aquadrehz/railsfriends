module TestHelpers
  class GoogleOAuth2Mock
    # include Warden::Test::Helpers

    def self.run(auth)
      new.run(auth)
    end

    def run(auth)
      OmniAuth.config.mock_auth[:google_oauth2] =
        OmniAuth::AuthHash.new(auth)
    end
  end
end

TestHelpers::GoogleOAuth2Mock.run(command_options)