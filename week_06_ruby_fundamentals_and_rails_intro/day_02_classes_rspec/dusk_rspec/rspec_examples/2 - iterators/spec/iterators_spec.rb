require 'spec_helper'

describe "Iterators" do

before :each do
  @arr = [1,2,3,4,5]
end
  # select
  describe "#select" do
      it "should select even numbers" do
        expect(@arr.select { |num|  num.even?  }).to eq([2,4])
      end
    end

  # reject
  describe "#reject" do
    it "should reject even numbers" do
        expect(@arr.reject { |num|  num.even?  }).to eq([1,3,5])
      end
  end

  # collect / map
  describe "#map" do
    it "should square each number" do
        expect(@arr.map { |num|  num*num  }).to eq([1,4,9,16,25])
      end
  end

  # detect / find
  describe "#detect" do
    it "should detect all numbers divisible by 2 and 4" do
        expect(@arr.detect { |num| num % 2 == 0 and num % 4 == 0 }).to eq(4)
      end
  end

  # inject
  describe "#inject" do
    it "should sum up all the numbers" do
      expect(@arr.inject { |num,prod| num+prod}).to eq(15)
    end
  end

  # partition
  describe "#partition" do
    it "should return an array of partitioned arrays " do
      expect(@arr.partition { |num| num % 2 == 0}).to eq([[2,4],[1,3,5]])
    end
  end

  # sort
  describe "#sort" do
    it "should sort an array of numbers" do
      expect([5,3,1,2,4].sort { |a,b| a-b }).to eq(@arr)
    end
  end

  # one
  describe "#one" do
    it "should return true if only one element meets the condition" do
      expect([0,1].one? { |num| num == 0 }).to be(true)
    end
    it "should return false if more than one element meets the condition" do
      expect([0,0,1].one? { |num| num == 0 }).to be(false)
    end
  end

  # none
  describe "#none" do
    it "should return true if the number is not in the array " do
      expect(@arr.none? { |num| num == 6}).to be(true)
    end
    it "should return false if the number is in the array " do
      expect(@arr.none? { |num| num == 3}).to be(false)
    end
  end
end