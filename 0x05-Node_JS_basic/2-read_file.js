const fs = require('fs');

function filterByGroup(group, dataset) {
    return dataset.filter((entry) => entry.split(',').at(-1).toString() === group);
}
function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const Sdata = data.toString().trim().split('\n');
        const fulldata = Sdata.splice(1,data.length);
        console.log(`Number of students: ${fulldata.length}`);
        const groups = new Set(fulldata.map((item) => item.split(',').at(-1)));
        for (const group of groups) {
            const filteredgroup = filterByGroup(group, fulldata);
            const fname = filteredgroup.map((entry) => entry.split(',').at(0));
            console.log(`Number of students in ${group}: ${filteredgroup.length}. List: ${fname.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents
