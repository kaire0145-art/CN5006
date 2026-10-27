const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/Week4';

// 1. Define the Person schema
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    gender: String,
    salary: Number,
    city: String
});

// 2. Create the Person model
const Person = mongoose.model(
    'Person',
    PersonSchema,
    'personCollection'
);

// 3. Insert one document
async function insertOne() {
    const person = new Person({
        name: 'Yousuf',
        age: 44,
        gender: 'Male',
        salary: 3456,
        city: 'London'
    });

    const savedDoc = await person.save();

    console.log('\n--- One Document Inserted ---');
    console.log(savedDoc);
}

// 4. Insert multiple documents
async function insertMany() {
    const manyPersons = [
        {
            name: 'SimonNHQ',
            age: 42,
            gender: 'Male',
            salary: 3456,
            city: 'London'
        },
        {
            name: 'NeeshaNN',
            age: 53,
            gender: 'Female',
            salary: 1000,
            city: 'Romford'
        },
        {
            name: 'MaryNHQ',
            age: 27,
            gender: 'Female',
            salary: 5402,
            city: 'Manchester'
        },
        {
            name: 'MikeNJQ',
            age: 40,
            gender: 'Male',
            salary: 4519,
            city: 'London'
        }
    ];

    const result = await Person.insertMany(manyPersons);

    console.log('\n--- Multiple Documents Inserted ---');
    console.log(result);
}

// 5. Find all documents
async function findAll() {
    const docs = await Person.find({})
        .sort({ salary: 1 })
        .select('name salary age city')
        .limit(100);

    console.log('\n--- All Documents ---');

    docs.forEach(doc => {
        console.log(
            `Name: ${doc.name}, ` +
            `Age: ${doc.age}, ` +
            `Salary: ${doc.salary}, ` +
            `City: ${doc.city}`
        );
    });
}

// 6. Find females aged 30 or above
async function findFemalesOver30() {
    const givenAge = 30;

    const docs = await Person.find({
        gender: 'Female',
        age: { $gte: givenAge }
    })
        .sort({ salary: 1 })
        .select('name salary age city')
        .limit(10);

    console.log(`\n--- Females Aged ${givenAge} or Above ---`);

    docs.forEach(doc => {
        console.log(
            `Name: ${doc.name}, ` +
            `Age: ${doc.age}, ` +
            `Salary: ${doc.salary}, ` +
            `City: ${doc.city}`
        );
    });
}

// 7. Count all documents
async function countDocuments() {
    const count = await Person.countDocuments();

    console.log('\n--- Total Documents ---');
    console.log(`Total documents: ${count}`);
}

// 8. Delete documents where age is 45 or above
async function deleteManyPersons() {
    const result = await Person.deleteMany({
        age: { $gte: 45 }
    });

    console.log('\n--- Delete Documents ---');
    console.log(`Documents deleted: ${result.deletedCount}`);
}

// 9. Update all females' salaries to 5555
async function updateManyPersons() {
    const result = await Person.updateMany(
        { gender: 'Female' },
        { $set: { salary: 5555 } }
    );

    console.log('\n--- Update Female Salaries ---');
    console.log(`Documents matched: ${result.matchedCount}`);
    console.log(`Documents modified: ${result.modifiedCount}`);
}

// 10. Find people from a specific city
async function findPeopleByCity(cityName) {
    const docs = await Person.find({
        city: cityName
    })
        .select('name age gender salary city')
        .sort({ name: 1 });

    console.log(`\n--- People from ${cityName} ---`);

    if (docs.length === 0) {
        console.log(`No people found in ${cityName}.`);
        return;
    }

    docs.forEach(doc => {
        console.log(
            `Name: ${doc.name}, ` +
            `Age: ${doc.age}, ` +
            `Gender: ${doc.gender}, ` +
            `Salary: ${doc.salary}, ` +
            `City: ${doc.city}`
        );
    });
}

// 11. Main function
async function main() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI);

        console.log(`Connected to ${MONGO_URI}`);

        // INSERT DATA
        // Uncomment these two lines when you need to insert records.
        // Run them once, then comment them out again to avoid duplicates.

        // await insertOne();
        // await insertMany();

        // RETRIEVE DATA
        await findAll();

        // Find females aged 30 or above
        await findFemalesOver30();

        // Count all documents
        await countDocuments();

        // PORTFOLIO TASK:
        // Find only people from London
        await findPeopleByCity('London');

        // OPTIONAL UPDATE AND DELETE OPERATIONS
        // Uncomment these lines only when required.

        // await updateManyPersons();
        // await deleteManyPersons();

    } catch (err) {
        console.error('\nError:', err);
    } finally {
        // Close the database connection
        if (mongoose.connection.readyState !== 0) {
            await mongoose.connection.close();
        }

        console.log('\nConnection closed');
    }
}

// Run the program
main();
