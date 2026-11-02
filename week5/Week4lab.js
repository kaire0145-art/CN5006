const mongoose = require('mongoose');

// ==========================================
// PERSON SCHEMA AND MODEL
// ==========================================
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    gender: String,
    salary: Number
});

const Person = mongoose.model(
    'modelname',
    PersonSchema,
    'personCollection'
);


// ==========================================
// INSERT ONE PERSON
// ==========================================
async function insertOne(name, age, gender, salary) {
    const doc1 = new Person({
        name,
        age,
        gender,
        salary
    });

    const savedDoc = await doc1.save();

    console.log('One document inserted');

    return savedDoc;
}


// ==========================================
// INSERT MANY PEOPLE
// ==========================================
async function insertMany() {
    const manyPersons = [
        { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456 },
        { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000 },
        { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402 },
        { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519 }
    ];

    const result = await Person.insertMany(manyPersons);

    console.log('Many documents inserted');
    console.log(result);

    return result;
}


// ==========================================
// FIND ALL PEOPLE
// ==========================================
async function findAll() {
    console.log('Before query');

    const docs = await Person.find({})
        .sort({ salary: 1 })
        .select('name salary age')
        .limit(100);

    console.log('After query');
    console.log('Showing multiple documents');

    docs.forEach(doc => {
        console.log(doc.age, doc.name, doc.salary);
    });

    return docs;
}


// ==========================================
// FIND FEMALES AGED 30 OR ABOVE
// ==========================================
async function findFemalesOver30() {
    const givenAge = 30;

    const docs = await Person.find({
        gender: 'Female',
        age: { $gte: givenAge }
    })
        .sort({ salary: 1 })
        .select('name salary age')
        .limit(10);

    console.log(`Females aged ${givenAge} or above:`);

    docs.forEach(doc => {
        console.log(doc.age, doc.name, doc.salary);
    });

    return docs;
}


// ==========================================
// COUNT ALL PEOPLE
// ==========================================
async function countDocuments() {
    const count = await Person.countDocuments();

    console.log('Total documents count:', count);

    return count;
}


// ==========================================
// DELETE PEOPLE AGED 45 OR ABOVE
// ==========================================
async function deleteManyPersons() {
    const result = await Person.deleteMany({
        age: { $gte: 45 }
    });

    console.log('Deleted documents:', result);

    return result;
}


// ==========================================
// UPDATE ALL FEMALE SALARIES TO 5555
// ==========================================
async function updateManyPersons() {
    const result = await Person.updateMany(
        { gender: 'Female' },
        { $set: { salary: 5555 } }
    );

    console.log('Update successful');
    console.log(result);

    return result;
}


// ==========================================
// EXPORT FUNCTIONS FOR index.js
// ==========================================
module.exports = {
    insertOne,
    insertMany,
    findAll,
    findFemalesOver30,
    countDocuments,
    deleteManyPersons,
    updateManyPersons
};