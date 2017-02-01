# PixelEditor

DATABASE NAME:editor;
<h3> Model </h3>
<br>
CREATE TABLE `file` (
  `fname` varchar(100) NOT NULL,
  `messages` mediumtext NOT NULL,
  PRIMARY KEY  (`fname`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
<br>
 <h3> View </h3>
 <br>
 1. Display all the files in the grid view (display their file name alone) <br>
 2. On click the particular filename, display the file content details in editor form. (textArea) <br>
 
 <h3> Controller </h3>
 <br>
 
