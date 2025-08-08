// Mock Base44 Core integrations for development
// In production, these would be replaced with actual Base44 SDK calls

export const UploadFile = async ({ file }) => {
  // Mock file upload - in production this would upload to Base44's file storage
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve({
        file_url: e.target.result, // Returns base64 data URL for demo
        file_name: file.name,
        file_size: file.size
      });
    };
    reader.readAsDataURL(file);
  });
};

export const SendEmail = async ({ to, subject, body }) => {
  // Mock email sending
  console.log('Mock email sent:', { to, subject, body });
  return { success: true, message_id: 'mock_' + Date.now() };
};

export const GenerateAI = async ({ prompt, model = 'gpt-3.5-turbo' }) => {
  // Mock AI generation
  console.log('Mock AI generation:', { prompt, model });
  return { 
    response: 'This is a mock AI response for: ' + prompt,
    tokens_used: 50
  };
};