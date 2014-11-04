class Book
    attr_accessor :title, :author, :category
    @@count = 0
        def initialize title, author, category
            @title = title
            @author = author
            @category = category
            @@count += 1
        end

        def self.count
          @@count
        end
end
