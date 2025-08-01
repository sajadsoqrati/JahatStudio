const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const contact = JSON.parse(event.body);
    
    // Validate required fields
    if (!contact.firstName || !contact.lastName || !contact.email || !contact.tel) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Add timestamp
    contact.timestamp = new Date().toISOString();
    
    // Read existing contacts
    const contactsPath = path.join(__dirname, '../../data/contacts.json');
    let contacts = [];
    
    // Create data directory if it doesn't exist
    const dataDir = path.dirname(contactsPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    if (fs.existsSync(contactsPath)) {
      contacts = JSON.parse(fs.readFileSync(contactsPath, 'utf8'));
    }
    
    // Add new contact
    contacts.push(contact);
    
    // Write back to file
    fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Contact saved successfully' })
    };
    
  } catch (error) {
    console.error('Error processing contact:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 