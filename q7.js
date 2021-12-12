var string = "hello";
if (string.length == 1) {
  return string;
} else if (string[0] == string[1]) {
  return removeDuplicates(string[1]);
}

return string[0] + removeDuplicates(string[1]);
