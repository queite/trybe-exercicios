function techList(techs, person) {
  techs.sort();
  let exitArray = [];
  for (let index in techs) {
    let object = {
      tech: techs[index],
      name: person,
    };
    exitArray.push(object);
  }
  if (exitArray.length === 0) {
    return 'Vazio!';
  }
  return exitArray;
}

module.exports = techList;