const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

const characters = require('./characters.json')
const filePath = './characters.json'

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/data/:module', async (req, res) => {
    const { module, categ, subcateg } = req.params;
    let apiUrl = `https://www.dnd5eapi.co/api/${module}`;
    
    if (categ) {
        apiUrl += `/${categ}`;
    }
    if (subcateg) {
        apiUrl += `/${subcateg}`;
    }

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

function readData() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return null;
    }
}

// Function to write data to the JSON file
function writeData(newData) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 4), 'utf8');
        console.log('Data written successfully');
    } catch (error) {
        console.error('Error writing to JSON file:', error);
    }
}

// Function to add a new character block
function addCharacter(characterName, characterData) {
    const data = readData();
    if (data) {
        data[characterName] = characterData;
        writeData(data);
    }
}

// Function to modify an existing character block
function modifyCharacter(characterName, updatedData) {
    const data = readData();
    if (data && data[characterName]) {
        data[characterName] = { ...data[characterName], ...updatedData };
        writeData(data);
    } else {
        console.log('Character not found');
    }
}

function modifyCharacterProperty(characterName, property, value) {
    const data = readData();
    if (data && data[characterName]) {
        data[characterName][property] = value;
        writeData(data);
    } else {
        console.log('Character not found');
    }
}

app.listen(process.env.PORT || 3000, () => console.log('App listening on PORT 3000'));