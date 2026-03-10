export default class ProjectUtils {

  static sortByStartDesc(projectsMap) {
    return [...projectsMap.values()].sort((a, b) => b.start - a.start);
  }

}