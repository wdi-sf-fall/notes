# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "nyan-cat-formatter"
  s.version = "0.10.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Matt Sears"]
  s.date = "2014-08-30"
  s.description = "Nyan Cat inspired RSpec formatter!"
  s.email = ["matt@mattsears.com"]
  s.homepage = "https://github.com/mattsears/nyan-cat-formatter"
  s.require_paths = ["lib"]
  s.rubyforge_project = "nyan-cat-formatter"
  s.rubygems_version = "2.0.14"
  s.summary = "Nyan Cat inspired RSpec formatter!"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rspec>, ["< 4", ">= 2.14.2", ">= 2.99"])
      s.add_development_dependency(%q<rake>, [">= 0"])
    else
      s.add_dependency(%q<rspec>, ["< 4", ">= 2.14.2", ">= 2.99"])
      s.add_dependency(%q<rake>, [">= 0"])
    end
  else
    s.add_dependency(%q<rspec>, ["< 4", ">= 2.14.2", ">= 2.99"])
    s.add_dependency(%q<rake>, [">= 0"])
  end
end
