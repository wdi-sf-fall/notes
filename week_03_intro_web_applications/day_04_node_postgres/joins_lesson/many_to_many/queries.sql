

SELECT b.title, l.name FROM books AS b
  LEFT OUTER JOIN library_books AS bc
   ON bc.book_id=b.id 
  LEFT OUTER JOIN libraries AS l
   ON bc.library_id=l.id;

SELECT libraries.name, books.title FROM books
  LEFT JOIN library_books
   ON library_books.book_id=books.id 
  LEFT  JOIN libraries
   ON library_books.library_id=libraries.id
  WHERE libraries.name = 'Schwarzman' ;

 SELECT libraries.name, books.title FROM books
  LEFT JOIN library_books
   ON library_books.book_id=books.id 
  LEFT  JOIN libraries
   ON library_books.library_id=libraries.id
  WHERE books.title = 'The Great Gatsby' ;

SELECT distinct(libraries.name), books.title  FROM books
  LEFT JOIN library_books
   ON library_books.book_id=books.id 
  LEFT  JOIN libraries
   ON library_books.library_id=libraries.id
  WHERE books.title = 'The Great Gatsby' ;

 SELECT distinct(libraries.name), books.title  FROM books
  LEFT JOIN library_books
   ON library_books.book_id=books.id 
  LEFT  JOIN libraries
   ON library_books.library_id=libraries.id
  WHERE books.title = 'The Great Gatsby' AND libraries.name = 'Schwarzman' ;

 SELECT count(books.title)  FROM books
  LEFT JOIN library_books
   ON library_books.book_id=books.id 
  LEFT  JOIN libraries
   ON library_books.library_id=libraries.id
  WHERE books.title = 'The Great Gatsby' AND libraries.name = 'Schwarzman' ;