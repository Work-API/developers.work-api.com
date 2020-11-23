###
# Helpers
###

GUIDE_BASE_PATH = '/repos/spico/spico-api-docs'

helpers do
  def render_markdown(source)
    input = File.read(File.join(GUIDE_BASE_PATH, source))
    Kramdown::Document.new(input).to_html
  end

  def active?(path, level: nil)
    current_segs = current_page.path.gsub(/index\.html/, '').split('/')
    check_segs = path.split('/').reject(&:blank?)

    return check_segs == current_segs if level.nil?
    return check_segs.slice(0, level) == current_segs.slice(0, level)
  end
end

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  blog.prefix = "blog"

  blog.permalink = "{title}.html"
  # Matcher for blog source files
  blog.sources = "posts/:title.html"
  #blog.taglink = "tags/{tag}.html"
  blog.layout = "layouts/post-layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "posts/{num}"

  blog.publish_future_dated = false
end

page "/feed.xml", layout: false

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'media/img'

set :build_dir, '../public/developers'

set :relative_links, true

set :path_prefix, "/developers"

activate :autoprefixer

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Optimise images on build
  # activate :imageoptim

  # Build sitemap
  # activate :sitemap, :hostname => "https://developers.work-api.com"

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

after_configuration do
  sprockets.append_path File.join root.to_s, "bower_components"
end
