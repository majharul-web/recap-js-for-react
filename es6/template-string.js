// file name:template-string.js

const Person = {
  name: 'jony',
  district: 'dinajpur',
  education: ['ssc', 'diploma'],
  skill: {
    special: {
      programming: 'java',
    },
    basic: ['MS Office', 'graphics design', 'networking'],
  },
};

const info = `He is Mr ${Person.name} ,
            Her Top Education:${Person.education[1]},
            Her Top skill:${Person.skill.special.programming}
        `;
console.log(info);
