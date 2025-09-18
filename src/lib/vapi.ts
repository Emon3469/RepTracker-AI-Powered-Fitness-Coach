import Vapi from '@vapi-ai/web';

// Provide fallback for build environments
const vapiKey = process.env.NEXT_PUBLIC_VAPI_API_KEY || 'placeholder-key';
export const vapi = new Vapi(vapiKey);