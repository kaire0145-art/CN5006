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
    salary: Number
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
        salary: 3456
    });

    const savedDoc = await person.save();

    console.log('\n--- One Document Inserted ---');
    console.log(savedDoc);
}

// 4. Insert many documents
async function insertMany() {
    const manyPersons = [
        { name: 'SimonNHQ', age: 42, gender: 'Male', salary: 3456 },
        { name: 'NeeshaNN', age: 53, gender: 'Female', salary: 1000 },
        { name: 'MaryNHQ', age: 27, gender: 'Female', salary: 5402 },
        { name: 'MikeNJQ', age: 40, gender: 'Male', salary: 4519 }
    ];

    const result = await Person.insertMany(manyPersons);

    console.log('\n--- Multiple Documents Inserted ---');
    console.log(result);
}

// 5. Find all documents
async function findAll() {
    const docs = await Person.find({})
        .sort({ salary: 1 })
        .select('name salary age')
        .limit(100);

    console.log('\n--- All Documents (Sorted by Salary) ---');

    docs.forEach(doc => {
        console.log(
            `Age: ${doc.age}, Name: ${doc.name}, Salary: ${doc.salary}`
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
        .select('name salary age')
        .limit(10);

    console.log(`\n--- Females Aged ${givenAge} or Above ---`);

    docs.forEach(doc => {
        console.log(
            `Age: ${doc.age}, Name: ${doc.name}, Salary: ${doc.salary}`
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

// 10. Main function
async function main() {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI);

        console.log(`Connected to ${MONGO_URI}`);

        // Run the operations
        await insertOne();

        await insertMany();

        await findAll();

        await findFemalesOver30();

        await countDocuments();

        // These operations change data.
        // Uncomment them when you want to test them.
        // await updateManyPersons();
        // await deleteManyPersons();

    } catch (err) {
        console.error('\nError:', err);
    } finally {
        // Close the database connection
        await mongoose.connection.close();

        console.log('\nConnection closed');
    }
}

// Start the program
main();
