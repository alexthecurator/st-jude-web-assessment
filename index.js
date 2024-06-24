function getResults() {
  var results = [];

  // Get the table with results
  let table = document.getElementsByTagName("table")[2];
  let tbody = table.children[0].children;

  for (var i = 0; i < tbody.length; i++) {
    if (i > 0) {
      // Skip the table header
      let tr = tbody[i].children;
      let getValue = (x, type = "string") => {
        let value = tr[x].children[1].children[0].innerHTML.trim();
        switch (type) {
          case "number":
            return parseInt(value);
          // ... to add more typecasting cases
          default:
            return value;
        }
      };

      let getSubjects = (val) => {
        let subjects = [];
        let raw = val.split("  ");
        for (var sub of raw) {
          let subject = sub.split("-")[0].trim();
          let grade = sub.split("-")[1].trim().replace(/'/g, "");
          subjects.push({ subject, grade });
        }

        return subjects;
      };

      results.push({
        examNumber: getValue(0),
        points: getValue(2, "number"),
        division: getValue(3),
        subjects: getSubjects(getValue(4)),
      });
    }
  }

  return results;
}

console.log(getResults());
