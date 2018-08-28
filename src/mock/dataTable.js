import faker from 'faker';

const columns = [];

const rows = [];

// creating columns
for (let i = 0; i < 20; i++) {
  columns.push("COL" + i);
}

for (let i = 0; i < 1000; i++) {
  var row = {};

  for (let j = 0; j < columns.length; j++) {
    // faking number
    const num = faker.random.number();
    row[columns[j]] = num;
  }

  rows.push(row)
}

const starWarRows = [
  { title: "Episode IV – A New Hope", date: "May 25, 1977", director: "George Lucas" },
  { title: "Episode V – The Empire Strikes Back", date: "May 21, 1980", director: "George Lucas" },
  { title: "Episode VI – Return of the Jedi", date: "May 25, 1983", director: "George Lucas" },
  { title: "Episode I – The Phantom Menace", date: "May 19, 1999", director: "George Lucas" },
  { title: "Episode II – Attack of the Clones", date: "May 16, 2002", director: "George Lucas" },
  { title: "Episode III – Revenge of the Sith", date: "May 19, 2005", director: "George Lucas" },
  { title: "Episode VII – The Force Awakens", date: "December 18, 2015", director: "George Lucas" },
  { title: "Episode VII – The Last Jedi", date: "December 15, 2017", director: "George Lucas" },
  { title: "Episode IX – Uomo Focaccina is Jar Jar Binks", date: "December 20, 2019", director: "George Lucas" },
  { title: "Rogue One: A Star Wars Story", date: "December 16, 2016", director: "Gareth Edwards" },
  { title: "Solo: A Star Wars Story", date: "May 25, 2018", director: "Ron Howard" },
];

export default {
  columns,
  starWarRows,
  rows,
};


