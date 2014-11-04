require 'spec_helper'

describe "Testing" do

  describe "Addition" do
    it "works" do
      expect(1 + 1).to eq(2)
    end
  end

  describe "Subtraction" do
    it "works" do
      expect(1 - 1).to eq(0)
    end
  end

  describe "something" do
    it "does something that passes" do
      expect(5).to eq(5)
    end

    it "does something that passes using not" do
      expect(5).to_not eq(3)
    end

    xit "does something that is pending using xit", pending: true do
      expect(5).to be < 3
    end

    it "does something that is pending by specifying pending", pending: true do
      expect(5).to be < 3
    end
  end

end