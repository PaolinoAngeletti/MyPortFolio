export default class TechnologyUtils {

  static sortAlphabetically(technologiesList) {
    return technologiesList.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  }

}