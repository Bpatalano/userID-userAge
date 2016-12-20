# userID-userAge

## To run this program on the included file:
  
  Clone the repo,
  
  Navigate to the containing file,
  
  Make sure Node is globally installed by typing `node -v` to check your version,
  
  Run `node solution.js ./userID-userAge.csv`,
  
  Your result will be logged in the console

## More info and how to run on any file:

The program can be executed on a command line with node installed globally

To run this program on `./relative/path/to/file.csv` just type `node solution.js ./relative/path/to/file.csv`

The program accepts a filename for a file which contains an arbitrary number of lines. Each line contains an integer user ID and an integer user age, delimited by a comma.

```
001,15
002,14
003,12
004,15
005,15
006,14
007,12
008,13
```

The program logs a list of tuples, where each tuple contains a distinct age and the count of users with that age, delimited by a comma.

```
// [[12,2],[13,1],[14,2],[15,3]]
```

This program could be easily modified to take this list and return it, write it to a file, etc.
