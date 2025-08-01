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
    
    // Log the contact data (you can view this in Netlify function logs)
    console.log('New contact submission:', contact);
    
    // For now, just return success
    // Later you can integrate with a database or email service
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Contact received successfully',
        data: contact
      })
    };
    
  } catch (error) {
    console.error('Error processing contact:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error', details: error.message })
    };
  }
}; 