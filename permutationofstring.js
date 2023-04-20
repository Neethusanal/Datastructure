function permutations(string) {
    if (string.length === 1) {
      return [string];
    }
  
    const perms = [];
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      const remainingChars = string.slice(0, i) + string.slice(i + 1);
      const innerPerms = permutations(remainingChars);
      for (let j = 0; j < innerPerms.length; j++) {
        perms.push(char + innerPerms[j]);
      }
    }
    return perms;
  }
  

  const str = "abc";
  const perms = permutations(str);
  console.log(perms);
  