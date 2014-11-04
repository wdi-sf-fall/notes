require 'spec_helper'
require_relative '../book'

describe Book do

# run one time only, before all of the examples in a group
# before(:context)
# this shares state across examples
before :context do
    @book = Book.new "Great Gatsby", "Fitzy", "classic"
end

# # does not share state across examples
# before :each do
#     @book = Book.new "Great Gatsby", "Fitzy", "classic"
# end

  describe "#new" do
      it "takes three parameters and returns a Book object" do
          expect(@book).to be_instance_of Book
      end
  end
  describe "#title" do
      it "returns the correct title" do
          expect(@book.title).to eq("Great Gatsby")
      end
  end
  describe "#author" do
      it "returns the correct author" do
          expect(@book.author).to eq("Fitzy")
      end
  end
  describe "#category" do
      it "returns the correct category" do
          expect(@book.category).to eq("classic")
      end
  end
    describe "#accessor methods" do
      it "can change title" do
          @book.title = "New title"
          expect(@book.title).to eq("New title")
      end
  end


  describe "#bookCount" do
      it "should count books" do
      expect(Book.count).to eq(1)
      end
  end

end