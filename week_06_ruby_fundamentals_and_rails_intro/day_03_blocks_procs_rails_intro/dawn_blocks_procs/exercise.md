# Exercise

Write a method that begins a story.  The story method should take 2
parameters and should also be passed a block.  The block should return
the conclusion to the story.  Here is an example:

```
story("Ned Stark", "Robert Baratheon") do
  "Some bad things happened to them later on."
end

# Returns the following string:
# One day Ned Stark and Robert Baratheon left for King's Landing.
# Some bad things happened to them later on.

```
